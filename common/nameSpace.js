/**
 * Created by wei on 18-7-23.
 */
const namespace = {
    dbModel: {
        get user() {
            return require('mongoose').models['User'];
        },
        get category() {
            return require('mongoose').models['Category'];
        },
        get article() {
            return require('mongoose').models['Article'];
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