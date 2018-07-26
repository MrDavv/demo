/**
 * Created by wei on 18-7-26.
 */
const mongoose = require('mongoose');
const db=require('./db');
const modelName='CircleContent';

const schema=new mongoose.Schema({
    uid: {
        type: String
    },
    circleCateGoryUid: {
        type: String
    },
});

// schema.index( {name : 1}, { unique : true } );

schema.statics={

};

module.exports= {
    load:function(){
        let model = mongoose.model(modelName, schema);
        console.log(`模块${modelName}被注册`);
    }
};