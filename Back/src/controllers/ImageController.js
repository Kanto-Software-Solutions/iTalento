const conexion = require('../database/db');

exports.agregarimagenGig = (req, res) => {
	//const
	console.log(req);
	const id = req.id;
	const imagenes = req.imagenes;
	var i = 1;

	imagenes.forEach(element => {
		conexion.query("INSERT INTO `mydb`.`Image` (`url`,`idGig`,`portada`) VALUES ( '" + element + "','" + id + "','" + i + "')", (error, results) => {
			if (i == 1) {
				i = 0;
			}
			if (error) {
				console.log(error);
			} else {
				console.log("Se agregó la imagen");
			}
		});
	});
	return res.json({ message: "Exito" });
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