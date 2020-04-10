/**
 * Creates and handles mongodb connection
 * 
 * @author xionjames
 * @version 1.0
 */

const settings = require('./settings.js');
const MongoClient = require('mongodb').MongoClient;

exports.connect = new Promise((resolv, reject) => {
    // Connection URL
    const dbUrl = 'mongodb://' 
                + settings.DB_USER + ':' 
                + settings.DB_PASS + '@' 
                + settings.DB_HOST + ':' 
                + settings.DB_PORT + '/' 
                + settings.DB_NAME;
                
    // Create a new MongoClient
    const client = new MongoClient(dbUrl);

    // Use connect method to connect to the Server
    console.log("Connecting to database...");
    client.connect(function(err) {
        if (!err) {
            console.log("Connected successfully to database!");
            resolv(client);
        } else {
            console.log("ERROR: " + err);
        }
    });
});