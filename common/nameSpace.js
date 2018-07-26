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
        get communityCategory() {
            return require('mongoose').models['CommunityCategory'];
        },
        get circleCategory() {
            return require('mongoose').models['CircleCategory'];
        },
        get infoCategory() {
            return require('mongoose').models['InfoCategory'];
        },
        get infoArticle() {
            return require('mongoose').models['InfoArticle'];
        },
        get circleContent() {
            return require('mongoose').models['CircleContent'];
        },
        get circleComment() {
            return require('mongoose').models['CircleComment'];
        },
    },
    //工具
    util: {
        get checkParams() {
            return require("../util/checkParams");
        },
        get getCategory() {
            return require("../util/getCategory");
        }
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