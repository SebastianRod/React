const connection = require('./mongoConnection');

const Init = async () => {
    const db = await connection(); //Se obtiene la conexion

    var result = db.collection('ORCH_CONSTANTS').find({key : 'ASAP_PRODUCCION'}).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
    });

};

function getConstant(){
    const db = connection();
    var result = db.collection('ORCH_CONSTANTS').find({key : 'ASAP_PRODUCCION'}).toArray();
    console.log("Este fue el resultado: "+result);
    return result;
}

var result = getConstant();
console.log(result);
module.exports = result;