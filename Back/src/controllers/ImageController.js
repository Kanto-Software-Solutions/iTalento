const conexion = require('../database/db');
const cloudinary = require('cloudinary');

cloudinary.v2.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_APIKEY,
	api_secret: process.env.CLOUD_SECRET,
	secure: true,
});

exports.agregarimagenGig = (req, res) => {
	//const
	console.log(req);
	const id = req.id;
	const imagenes = req.imagenes;
	console.log(imagenes);
	//Subir a cloudinary	
	imagenes.forEach(async imagen => {
		console.log("Subiendo imagenes a cloudinary");
		try {
			const resultado = await cloudinary.v2.uploader.upload(imagen, { folder: "Gigs",tags: [id] })
			console.log(resultado);
		} catch (error) {
			console.log(error);
			throw error;
		}
	});
	//Agregar a la base de datos
};

exports.getImageByGig = (req, res) => {
	conexion.query("SELECT * FROM mydb.Image WHERE idGig = " + req.params.idGig, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
};

exports.getAllImages = (req, res) => {
	conexion.query("SELECT * FROM mydb.Image", (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
};