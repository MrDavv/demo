/**
 * Created by wei on 18-7-17.
 */
'use strict';

const mongoose = require('mongoose');
// const config = require('../config');

// let connectionString = `mongodb://${config.db.username}:${config.db.pwd}@${config.db.host}:${config.db.port}/${config.db.dbname}`;
let connectionString = `mongodb://127.0.0.1:27017/demo`;

const options = {
    db: {
        native_parser: true,
    },
    server: {
        auto_reconnect: true,
        poolSize: 5,
    },
    useNewUrlParser: true,
};

mongoose.Promise = require('bluebird');

mongoose.connect(connectionString, options, (err, res)=> {
    if (err) {
        console.log(`[mongoose log] Error connecting to: ${connectionString} . ${err}`);
        return process.exit(1);
    } else {
        return console.log(`[mongoose log] Successfully connected to: ${connectionString}`);
    }
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('open', function() {
    return console.log('mongoose open success');
});


module.exports = db;