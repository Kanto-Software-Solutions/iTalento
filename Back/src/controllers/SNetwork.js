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

    conexion.query('update SNetwork set SNetwork idRed =' + idRed + ' , idUser="'+ idUser+'", nombre="'+nombre +'", link="'+link );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó la Red ");
			
		}
	});

}


exports.getAllNetwroks = (req,res) => {

    const idUser = body.req.idUser;

	conexion.query('SELECT * FROM SNetwork where idUser = "' + idUser +'"');
    conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};