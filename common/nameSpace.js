/**
 * Created by wei on 18-7-23.
 */
const namespace = {
    dbModel: {
        get user() {
            return require('mongoose').models['User'];
        },
        get infoCategory() {
            return require('mongoose').models['InfoCategory'];
        },
        get infoArticle() {
            return require('mongoose').models['InfoArticle'];
        },
    },
    //工具
    util: {
        get checkParams() {
            return require("../util/checkParams");
        },
    },
    //管理器
    manager: {
        get dataManage() {
            return require('./dataManage');
        }
    },
    //码
    code: {
        get authCode() {
            return require("./authCode");
        },
    },
    //第三方库
    thirdModule: {
        // get request() {
        //     return require("../../node_modules/request");
        // }
    },
};

module.exports = namespace;