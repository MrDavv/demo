/**
 * Created by wei on 18-7-17.
 */
'use strict';

const mongoose = require('mongoose');
const db=require('./db');
const modelName='InfoCategory';

const schema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    orderNum: {
        type: Number,
        required: true
    }
});

schema.index( {name : 1}, { unique : true } );
schema.index( {orderNum: 1}, { unique: true });

schema.statics={

};

module.exports= {
    load:function(){
        let model = mongoose.model(modelName, schema);
        console.log(`模块${modelName}被注册`);
    }
};