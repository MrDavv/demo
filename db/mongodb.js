/**
 * Created by wei on 18-7-17.
 */
'use strict';
module.exports = {
    load () {
        require('./user').load();
        require('./category').load();
        require('./article').load();
    }
};