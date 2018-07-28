/**
 * Created by wei on 18-7-17.
 */
'use strict';

const mongoose = require('mongoose');
const db=require('./db');
const modelName='User';

const schema=new mongoose.Schema({
    communityUid: { // 社区标识
        type: String
    },
    openId: { // 用户唯一标示
        type: String
    },
    name: {
        type: String
    },
    headImageUrl: {
        type: String
    },
    level: {
        type: Number
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    createTime: {
        type: Date
    }
});

schema.index( {phone : 1}, { unique : true } );

schema.statics={

};

module.exports= {
    load:function(){
        let model = mongoose.model(modelName, schema);
        console.log(`模块${modelName}被注册`);
    }
};