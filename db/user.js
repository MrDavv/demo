/**
 * Created by wei on 18-7-17.
 */
'use strict';

const mongoose = require('mongoose');
const db=require('./db');
const modelName='User';

const schema=new mongoose.Schema({

});

// schema.index( {lastUpdateTime : 1}, { unique : false } );

schema.statics={

};

module.exports= {
    load:function(){
        let model = mongoose.model(modelName, schema);
        console.log(`模块${modelName}被注册`);
    }
};