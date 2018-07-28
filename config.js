// /**
//  * Created by wei on 18-7-17.
//  */
module.exports = {
    db: {

    },
    qn: {
        accessKey: '5hgm7hi3bsVMn_JdECfkJeJ67p1Itx58HEwWQfqN',
        secretKey: '_bXFuX1yUcEeg4eoQ160mLHYlxqB6ps9YrVtyAhH',
        bucket: 'group'
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