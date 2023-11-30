const conexion = require('../database/db');

exports.myUsuario = (req, res) => {

	let id;
	let estado = req.oidc.isAuthenticated();
	let registrado = false;
	let sesion = {};

	if (estado) {
		id = req.oidc.user.sub.split('|')[1];
		sesion = req.oidc.user;
		sesion.idUser = '';
		conexion.query("CALL mydb.ValidarUsuario( '" + id + "');", (error, results) => {
			if (error) {
				console.log(error);
				res.json(error);
			} else {
				if (results[0][0].val=='true') {
					sesion.idUser = results[0][0].user_id;
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

exports.dispNickname = (req, res) => {
	let nickname = req.params.nickname;
	conexion.query("CALL mydb.ValidarNickname ('" + nickname + "');", (error, results) => {
		if (error) {
			console.log(error);
			res.json(error);
		} else {
			if (results[0][0].val=='true') {
				res.json({disponible: true});
			} else {
				res.json({disponible: false});
			}
		}
	});
}

