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
		conexion.query("CALL `mydb`.`ValidarUsuario`( '" + id + "');", (error, results) => {
			if (error) {
				console.log(error);
				res.json(error);
			} else {
				if (results[0][0].val=='true') {
					datos = results[0];
					registrado = true;
				}
				res.json({
					estado: estado,
					registrado: registrado,
					sesion: sesion,
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
