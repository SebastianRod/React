var mongoConnection = require('./src/db/connection.js');

mongoConnection.connect
.then((client) => {
  const db = client.db();

  db.collection('ORCH_ATOMICS').find({id: "CollInsEnvioPlataformaFTTX_ASAP"}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.log(docs)
  });

  client.close(); // <<-- always close the client!
})
.catch((err) => {
  console.log("Ups! La estoy cagando!");
});
