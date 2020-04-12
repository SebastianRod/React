var express = require('express');
var router = express.Router();

async function getServices() {
  var mongoConnection = require('../db/connection.js'); 
  return await mongoConnection.find('ORCH_SERVICES', {}, {id: 1, _id: 0, keys: 1, description: 1}, {id: 1});
}

/* GET * listing. */
router.get('/getAll', async function(req, res, next) {
  var docs = await getServices();
  console.log("Found records");
  console.log(docs);

  res.json({
    response: "OK",
    description: "OK",
    documents: docs
  });

});

module.exports = router;
