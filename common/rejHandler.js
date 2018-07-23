module.exports = {
    ctrlDecorator,
    routerDecorator
};

function ctrlDecorator(ctrl, dealer) {
    if ({}.toString.call(ctrl) !== '[object AsyncFunction]') {
        return ctrl;
    }
    return function (req, res, next) {
        return ctrl(req, res, next).catch(rej => {
            // console.log(dealer,4444)
            if (dealer) return dealer(req, res, next, rej);
            res.send('Internal Error');
        });
    };
}

function routerDecorator(router, dealer) {
    // console.log(router, dealer,1111);
    const methods = require('methods');
    [...methods, 'all'].forEach(method => {
        // console.log(method, router[method],2222)
        if (router[method]) {
            router[method] = function (path, ...fns) {
                if (fns.length === 0) return;
                const route = this.route(path);
                const ctrlIndex = fns.length - 1;
                // console.log(route, ctrlIndex,3333);
                if (typeof fns[ctrlIndex] !== 'function') throw Error('The last param should be a controller, but not a function');
                fns[ctrlIndex] = ctrlDecorator(fns[ctrlIndex], dealer);
                route[method].apply(route, fns);
                return this;
            };
        }
    });
    return router;
}