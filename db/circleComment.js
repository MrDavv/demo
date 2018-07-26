/**
 * Created by wei on 18-7-26.
 */
const mongoose = require('mongoose');
const db=require('./db');
const modelName='CircleComment';

const schema=new mongoose.Schema({
    circleContentUid: { // 被评论的文章标识
        type: String
    },
    uid: { // 评论用户标识
        type: String
    },
    content: { //  评论内容
        type: String
    },
    praiseNum: { // 该评论的点赞数
        type: Number,
        default: 0
    },
    createTime: {
        type: Date
    }
});

schema.index( {createTime : 1}, { unique : false } );

schema.statics={

};

module.exports= {
    load:function(){
        let model = mongoose.model(modelName, schema);
        console.log(`模块${modelName}被注册`);
    }
};