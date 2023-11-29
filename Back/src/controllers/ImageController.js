const conexion	= require('../database/db');

exports.agregarimagenGig = (req,res) => {
	//const
	const id = req.params.id;
	const imagenes = req.body.imagenes;
	const portada = req.body.portada;
	//Subir a cloudinary
	
	//Agregar a la base de datos


	conexion.query("", (error,results) => {
		if(error){
			console.log(error);
			res.sendStatus(400);
		}else{
			res.json({results:results});
		}
	});
};

exports.getImageByGig = (req,res) => {
	conexion.query("SELECT * FROM Image WHERE gigId = " + req.params.id, (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};