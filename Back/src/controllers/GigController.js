const dayjs = require('dayjs')
const imagenCnt = require('../controllers/ImageController');

const conexion = require('../database/db');

exports.getAllGigs = (req, res) => {
	conexion.query("SELECT * FROM Gig", (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
};

exports.getGigById = (req, res) => {
	conexion.query("SELECT * FROM Gig WHERE idGig = " + req.params.id, (error, results) => {
		if (error) {
			console.log(error);
			res.sendStatus(400);
		} else {
			res.json({ results: results });
		}
	});
};

exports.getGigByUser = (req, res) => {
	conexion.query("SELECT * FROM Gig WHERE idUser = " + req.params.id, (error, results) => {
		if (error) {
			console.log(error);
			res.sendStatus(400);
		} else {
			res.json({ results: results });
		}
	});
};

exports.createGig = (req, res) => {
	const idUser = req.body.idUser;
	const titulo = req.body.titulo;
	const description = req.body.descripcion;
	var createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
	const idCategory = req.body.categoria[0];
	const price = req.body.costo;
	const deliveryDays = req.body.tiempoEntrega;
	const revisiones = req.body.revisiones;
	const cantidad = req.body.cantidad;
	const imagenes = req.body.imagenes;

	console.log("Se recibio el gig: " + titulo + " " + description + " " + createdAt + " " + idCategory + " " + idUser + " " + price + " " + deliveryDays + " " + revisiones + " " + cantidad + " " + imagenes);

	var cadena = "INSERT INTO `mydb`.`Gig` (`name`,`description`,`createdAt`,`idCategory`,`idUser`,`price`,`deliveryDays`,`revisiones`,`cantidad`) VALUES "
	conexion.query(cadena + "('" + titulo + "' ,'" + description + "' ,'" + createdAt + "' ,'" + idCategory + "' ,'" + idUser + "' ,'" + price + "' ,'" + deliveryDays + "' ,'" + revisiones + "' ,'" + cantidad + "' )", (error, results) => {
		if (error) {
			console.log(error);
			res.sendStatus(400);
		} else {
			console.log("Se agregó el gig ");
			try {
				var datos = {
					id: results.insertId,
					imagenes: imagenes
				}
				imagenCnt.agregarimagenGig(datos)
				res.json({ upload: true, gigID: results.insertId });
			} catch (error) {
				console.log(error);
				res.json({ upload: false, gigID: results.insertId });	
			}
		}
	});
}

exports.updateGig = (req, res) => {
	const idGig = req.params.idGig;
	const name = req.body.name;
	const description = req.body.description;
	const createdAt = req.body.createdAt;
	const Gigcol = req.body.Gigcol;
	const idCategory = req.body.idCategory;
	const idUser = req.body.idUser;
	const price = req.body.price;
	const deliveryDays = req.body.deliveryDays;

	let query = ('update Gig set idGig =' + idGig + ' , name="' + name + '",description="' + description + '", createdAt = ' + createdAt + '", Gigcol = ' + Gigcol + '", idCategory = ' + idCategory + '", idUser = ' + idUser + '", price = ' + price + '", deliveryDays = ' + deliveryDays);
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log("Se actualizo el Gig: ");
			res.json({ results: results });
		}
	});
}

exports.deleteGig = (req, res) => {
	const idGig = req.params.idGig;
	conexion.query('delete from Gig where id = ' + idGig, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Se elimino el Gig' + idGig);
			res.json({ results: results });
		}
	});
}

exports.getAllGigsByCategory = (req, res) => {
	const idCategory = req.params.idCategory;
	conexion.query("SELECT * FROM Gig where idCategory=" + idCategory, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
};

exports.getPriceGig = (req, res) => {
	const idGig = req.params.idGig;
	conexion.query("SELECT price FROM Gig where idGig=" + idGig, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
};