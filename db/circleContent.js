/**
 * Created by wei on 18-7-26.
 */
const mongoose = require('mongoose');
const db=require('./db');
const modelName='CircleContent';

const schema=new mongoose.Schema({
    uid: { // 用户标识
        type: String
    },
    circleCategoryUid: { // 分类标识
        type: String
    },
    communityCategoryUid: { // 社区标识
        type: String
    },
    title: { // 标题
        type: String
    },
    content: { // 内容
        type: String
    },
    imageUrls: { // 图片 最多9张
        type: Array
    },
    praiseNum: { // 点赞数
        type: Number,
        default: 0
    },
    praiseUids: { // 点赞的用户标识
        type: Array
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