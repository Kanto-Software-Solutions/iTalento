const conexion = require('../database/db');

exports.agregarimagenGig = (req, res) => {
	//const
	console.log(req);
	const id = req.id;
	const imagenes = req.imagenes;
	console.log(imagenes);
	//Agregar a la base de datos
};

exports.getImageByGig = (req, res) => {
	conexion.query("SELECT * FROM Image WHERE gigId = " + req.params.id, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
};