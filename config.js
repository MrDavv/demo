// /**
//  * Created by wei on 18-7-17.
//  */
module.exports = {
    db: {

    },
    settingRoutes(app) {
        app.use('/', require('./routes/index'));
        app.use('/users', require('./routes/user/user'));
        app.use('/category', require('./routes/category'));
        app.use('/circleContent', require('./routes/circle/circleContent'));
        app.use('/circleComment', require('./routes/circle/circleComment'));
        app.use('/infoArticle', require('./routes/information/infoArticle'));
    }
};