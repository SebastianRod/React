var mongoConnection = require('./src/db/connection.js');

mongoConnection.connect
.then((client) => {
  const db = client.db();

  db.collection('objects').find({}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.log(docs)
  });

  client.close();
})
.catch((err) => {

  console.log("Ups! La estoy cagando!");
});
