const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');

const environment = require('../env/environments');
const PropertiesReader = require('properties-reader');
var properties = new PropertiesReader(environment);

var dbMongoHost = properties.get('database.mongo.host');
var dbMongoPort = properties.get('database.mongo.port');
var dbMongoUser = properties.get('database.mongo.user');
var dbMongoPwd = properties.get('database.mongo.pwd');
var dbMongoName = properties.get('database.mongo.dbName');

const url = 'mongodb://'+dbMongoUser + ':' + dbMongoPwd + '@' + dbMongoHost + ':' + dbMongoPort;

const client = new MongoClient(url);

/*
client.connect(function(err, client){
    assert.equal(null,err);
    console.log("Coronamos conexion");
})*/

module.exports = async () => {
    //Conexion al server
    await client.connect();

    //Se retorna la conexion con la bd a usar
    return client.db(dbMongoName); 
}