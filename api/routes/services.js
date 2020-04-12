var express = require('express');
var router = express.Router();

/* GET * listing. */
router.get('/getAll', async function(req, res, next) {
  var mongoConnection = require('../db/connection.js'); 

  var docs = await mongoConnection.find(
    'ORCH_SERVICES',
    {}, 
    {id: 1, _id: 0, keys: 1, description: 1}, 
    {id: 1}
  );
  console.log("Found " + docs.length + " records");

  res.json({
    response: "OK",
    description: "OK",
    documents: docs
  });

});


/**
 * api/services/getById?id=CollProcesaRmca
 */
router.get('/getById', async function(req, res, next) {
  var serviceId = req.query.id;

  var mongoConnection = require('../db/connection.js'); 

  var docs = await mongoConnection.find(
    'ORCH_SERVICES',
    {id: serviceId}
  );
  console.log("Found record! ");

  res.json({
    response: "OK",
    description: "OK",
    documents: docs
  });

});

module.exports = router;
