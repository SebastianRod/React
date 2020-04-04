const connection = require('./mongoConnection');

const Init = async () => {
    const db = await connection(); //Se obtiene la conexion

    var result = db.collection('ORCH_CONSTANTS').find({key : 'ASAP_PRODUCCION'}).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
    });

};

function getConstant(){
    const db = await connection();
    var result = db.collection('ORCH_CONSTANTS').find({key : 'ASAP_PRODUCCION'});
    return result;
}

module.exports = getConstant;