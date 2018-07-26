/**
 * Created by wei on 18-7-23.
 */
'use strict';

const express = require('express');
const router = express.Router();
const nameSpace = require('../../common/nameSpace');
const dataManage = nameSpace.manager.dataManage;
const authCode = nameSpace.code.authCode;
const check = nameSpace.util.checkParams;

const constant = require('../../common/constant');
const routeName = constant.routes.INFOCATEGORY;

let logger;
let result;
/* GET users listing. */
router.get('/add', async function(req, res, next) {
    try{
        check.checkParams(routeName, 'add', req);

        let asset = {
            name: req.query.name || req.body.name,
            orderNum: req.query.orderNum || req.body.orderNum
        };

        result = await dataManage.add(routeName, asset);

        res.send({code: authCode.SUCCESS});
    }catch (ex){
        console.error('ex =======================',ex, ex.stack);
        // logger.error(JSON.stringify({
        //     gameType : msg.gameType ,
        //     stack : ex.stack,
        //     ex : ex
        // })) ;
        res.send({code: ex.stack ? authCode.FAIL : ex});
    }

});

router.get('/remove', async function (req, res, next) {
    try{
        check.checkParams(routeName, 'remove', req);

        let uid = req.query.uid || req.body.uid;

        check.checkUid(uid);

        result = await dataManage.delSingle(routeName, {_id: uid});

        res.send({code: authCode.SUCCESS});
    }catch (ex) {
        console.error('ex =======================',ex, ex.stack);
        // logger.error(JSON.stringify({
        //     gameType : msg.gameType ,
        //     stack : ex.stack,
        //     ex : ex
        // })) ;
        res.send({code: ex.stack ? authCode.FAIL : ex});
    }
});

router.get('/update', async function (req, res, next) {
    try{
        check.checkParams(routeName, 'update', req);

        let uid = req.query.uid || req.body.uid;
        let asset = {
            name: req.query.name,
            orderNum: req.query.orderNum
        };

        check.checkUid(uid);

        result = await dataManage.upSingle(routeName, {_id: uid}, asset);

        res.send({code: authCode.SUCCESS});
    }catch (ex){
        console.error('ex =======================',ex, ex.stack);
        // logger.error(JSON.stringify({
        //     gameType : msg.gameType ,
        //     stack : ex.stack,
        //     ex : ex
        // })) ;
        res.send({code: ex.stack ? authCode.FAIL : ex});
    }
});

router.get('/getAll', async function (req, res, next) {
    try{
        check.checkParams(routeName, 'getAll', req);

        result = await dataManage.getAll(routeName);

        res.send({code: authCode.SUCCESS, data: result});
    } catch (ex){
        console.error('ex =======================',ex, ex.stack);
        // logger.error(JSON.stringify({
        //     gameType : msg.gameType ,
        //     stack : ex.stack,
        //     ex : ex
        // })) ;
        res.send({code: ex.stack ? authCode.FAIL : ex});
    }
});

router.get('/getByFilters', async function (req, res, next) {
    try{
        check.checkParams(routeName, 'getByFilters', req);

        let asset = {};
        let type = req.query.type || req.body.type;
        let name = req.query.name || req.body.name;
        let orderNum = req.query.orderNum || req.body.orderNum;

        if(type == 1){
            if(name){
                asset = {
                    name: name
                }
            }
        }else {
            if(orderNum){
                check.checkNum(orderNum, authCode.ORDERNUMERROR);
                asset = {
                    orderNum: orderNum
                }
            }
        }

        result = await dataManage.getByFilters(routeName, asset);

        res.send({code: authCode.SUCCESS, data: result});
    } catch (ex){
        console.error('ex =======================',ex, ex.stack);
        // logger.error(JSON.stringify({
        //     gameType : msg.gameType ,
        //     stack : ex.stack,
        //     ex : ex
        // })) ;
        res.send({code: ex.stack ? authCode.FAIL : ex});
    }
});

module.exports = router;