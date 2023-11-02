const conexion	= require('../database/db');

exports.createRed = (req,res) =>{

    const idRed = body.req.idRed;
    const idUser = body.req.idUser;
    const nombre = body.req.nombre;
    const link = body.req.link;

    conexion.query("INSERT INTO SNetwork (idRed, idUser, nombre, link) VALUES ( '" + idRed + "' ,'" + idUser + "' ,'" + nombre + "' ,'" + link + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó la Red ");
			
		}
	});

}


exports.updateRed = (req,res) =>{

    const idRed = body.req.idRed;
    const idUser = body.req.idUser;
    const nombre = body.req.nombre;
    const link = body.req.link;

    conexion.query('update SNetwork set SNetwork idRed =' + idRed + ' , idUser="'+ idUser+'", nombre="'+nombre );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó la Red ");
			
		}
	});

}