/**
 * Created by wei on 18-7-23.
 */
const nameSpace = require('../common/nameSpace');
const authCode = nameSpace.code.authCode;

function checkParams(routeName, routerPath, req) {
    let paramsConfig = require(`../paramsConfig/${routeName}.js`);
    for(let [key, value] of Object.entries(paramsConfig[routerPath])){
        let _value = req.query[key] || req.body[key];
        if(value){
            if(!_value){
                throw authCode.PARAMERROR;
            }
        }
    }
}

function checkUid(uid) {
    if(uid.length != 24){
        throw authCode.UIDERROR;
    }
}

function checkNum(num, errCode) {
    let _num = parseInt(num);
    if(Number.isNaN(_num)){
        throw errCode;
    }
}

module.exports.checkParams = checkParams;
module.exports.checkUid = checkUid;
module.exports.checkNum = checkNum;