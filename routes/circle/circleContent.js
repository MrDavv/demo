/**
 * Created by wei on 18-7-26.
 */

'use strict';

const express = require('express');
const router = express.Router();
const nameSpace = require('../../common/nameSpace');
const dataManage = nameSpace.manager.dataManage;
const authCode = nameSpace.code.authCode;
const check = nameSpace.util.checkParams;

const constant = require('../../common/constant');
const routeName = constant.routes.CIRCLECONTENT;

const seqQueue = require('seq-queue');
const queue = seqQueue.createQueue(5000);

let logger;
let result;
/* GET users listing. */
router.get('/add', async function(req, res, next) {
    try{
        check.checkParams(routeName, 'add', req);

       let asset = {

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

        let circleContentUid = req.query.circleContentUid || req.body.circleContentUid;

        check.checkUid(circleContentUid);

        result = await dataManage.delSingle(routeName, {_id: circleContentUid});

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

        let circleContentUid = req.query.circleContentUid || req.body.circleContentUid;

        check.checkUid(circleContentUid);

        let asset = {

        };

        check.checkUid(uid);

        result = await dataManage.upSingle(routeName, {_id: circleContentUid}, asset);

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

router.get('/praise', async function (req, res, next) {
    try{
        queue.push( async function (task) {
            check.checkParams(routeName, 'praise', req);
            let circleContentUid = req.query.circleContentUid || req.body.circleContentUid;
            check.checkUid(circleContentUid);
            let type = req.query.type || req.body.type;
            result = await dataManage.updatePraiseNum(routeName, {_id: circleContentUid}, type);
            res.send({code: authCode.SUCCESS})
        },function(){
            res.send({code: authCode.TIMEOUT});
        },2000);
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

module.exports = router;