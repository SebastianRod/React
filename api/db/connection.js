/**
 * Creates and handles mongodb connection
 * 
 * USAGE FROM OTHER FILEs:
 * 
 * var mongoConnection = require('./src/db/connection.js');
 * mongoConnection.connect
 * .then((client) => {
 *   const db = client.db();
 * 
 *   ... your code here!
 * 
 *   client.close(); // <<-- always close the client!
 * })
 * .catch((err) => {
 *   ... your error handle here
 * });
 * 
 * @author xionjames
 * @version 1.0
 */

const settings = require('./settings.js');
const MongoClient = require('mongodb').MongoClient;

exports.connect = async function() {
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
    return await client.connect();
}

exports.find = async function(collection, filters, selector = {}, sorting = {}) {
  const client = await exports.connect();
  const db = client.db();

  var docs = await db.collection('ORCH_SERVICES').find({}, {projection: {id: 1, _id: 0, keys: 1, description: 1}, sort: sorting}).toArray();

  client.close();

  return docs;
}