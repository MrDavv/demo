'use strict';

const express = require('express');
const qiniu = require('qiniu');
const router = express.Router();
const qnConfig = require('../config').qn;
const nameSpace = require('../common/nameSpace');
const authCode = nameSpace.code.authCode;
const mac = new qiniu.auth.digest.Mac(qnConfig.accessKey, qnConfig.secretKey);

/* GET home page. */
router.post('/test', function(req, res, next) {
  console.log(decodeURIComponent(req.body.str));
  res.send('sadfasdf');
  // res.render('index', { title: 'Express' });
});
router.get('/uploadToken', async function (req, res, next) {
  try{
      let options = {
          scope: qnConfig.bucket,
      };
      let putPolicy = new qiniu.rs.PutPolicy(options);
      let uploadToken = putPolicy.uploadToken(mac);
      res.send({code: authCode.SUCCESS, upToken: uploadToken});
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
