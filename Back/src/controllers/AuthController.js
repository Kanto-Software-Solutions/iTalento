const conexion = require('../database/db');

exports.myUsuario = (req, res) => {

	let id;
	let estado = req.oidc.isAuthenticated();
	let registrado = false;
	let sesion = {};
	let datos = {};

	if (estado) {
		id = req.oidc.user.sub.split('|')[1];
		sesion = req.oidc.user;
		conexion.query("SELECT * FROM User WHERE personalId =" + 123, (error, results) => {
			if (error) {
				console.log(error);
				res.json(error);
			} else {
				if (results.length > 0) {
					datos = results[0];
					registrado = true;
				}
				res.json({
					estado: estado,
					registrado: registrado,
					sesion: sesion,
					usuario: datos,
				});
			}
		});
	} else {
		res.json({
			estado: estado,
			registrado: true,
		});
	}
}
