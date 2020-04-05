const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');
/*
const environment = require('../env/environments');
const PropertiesReader = require('properties-reader');
const properties = new PropertiesReader(environment);

var dbMongoHost = properties.get('database.mongo.host');
var dbMongoPort = properties.get('database.mongo.port');
var dbMongoUser = properties.get('database.mongo.user');
var dbMongoPwd = properties.get('database.mongo.pwd');
var dbMongoName = properties.get('database.mongo.dbName');

const url = 'mongodb://'+dbMongoUser + ':' + dbMongoPwd + '@' + dbMongoHost + ':' + dbMongoPort;
*/
var dbMongoName = 'db';
const url = "mongodb://user:pwd@host:port/MDM";
const client = new MongoClient(url);

/*
client.connect(function(err, client){
    assert.equal(null,err);
    console.log("Coronamos conexion");
})*/

function conectarMongo(){
    client.connect();
    return client.db(dbMongoName); 
}
var conexion = conectarMongo();

module.exports =conexion;