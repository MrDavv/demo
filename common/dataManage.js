/**
 * Created by wei on 18-7-17.
 */
const mongoose = require('mongoose');
const nameSpace = require('./nameSpace');
const authCode = nameSpace.code.authCode;
let dbModel, exist;
module.exports = {
    async add(modelName, asset) {
        try{
            dbModel = nameSpace.dbModel[modelName];
            // step: 1 judge exists
            exist = await dbModel.findOne({name: asset.name});
            if (exist) {
                throw authCode.ALREADYEXISTED;
            } else {
                await dbModel.create(asset);
            }
        }catch (ex){
            throw ex;
        }
    },
    async delAll() {

    },
    async delSingle(modelName, filters) {
        try {
            dbModel = nameSpace.dbModel[modelName];
            exist = await dbModel.findOne(filters);
            if (exist) {
                await dbModel.remove(filters);
            } else {
                throw authCode.NONEXISTED;
            }
        }catch (ex){
            throw ex;
        }

    },
    async upAll() {

    },
    async upSingle(modelName, filters, asset) {
        try {
            dbModel = nameSpace.dbModel[modelName];
            exist = await dbModel.findOne(filters);
            if(exist){
                await dbModel.update(filters, asset);
            }else {
                throw authCode.NONEXISTED;
            }
        }catch (ex){
            throw ex;
        }

    },
    async getAll(modelName) {
        try{
            dbModel = nameSpace.dbModel[modelName];
            let data = await dbModel.find({});
            return data;
        }catch (ex){
            throw ex;
        }
    },
    async getByFilters(modelName, filters) {
        try {
            dbModel = nameSpace.dbModel[modelName];
            let data = await dbModel.find(filters);
            return data;
        }catch (ex){
            throw ex;
        }
    },
};