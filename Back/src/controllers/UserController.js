const conexion = require('../database/db');

exports.getAllUsers = (req, res) => {
	conexion.query("SELECT * FROM User", (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
};

exports.getUserByNick = (req, res) => {
	conexion.query("SELECT * FROM User WHERE nickname = '" + req.params.id + "'", (error, results) => {
		if (error) {
			console.log(error);
			res.json(error);
		} else {
			res.json({ results: results });
		}
	});
};

exports.getUserById= (req, res) => {
	conexion.query("SELECT * FROM User WHERE idUser = '" + req.params.id + "'", (error, results) => {
		if (error) {
			console.log(error);
			res.json(error);
		} else {
			res.json({ results: results });
		}
	});
};

exports.createUser = (req, res) => {
	let fecha = new Date();
	let nDate = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
	let queryInsert = "INSERT INTO `mydb`.`User`(`names`,`lastNames`,`email`,`isVerified`,`nickname`,`profileImage`,`isFreelancer`,`birthDate`,`country`,`acceptedTerms`,`personalId`,`creationDate`,`recLevel`,`location`,`job`,`description`) VALUES ("

	let valores = [
		req.body.names,			//names
		req.body.lastNames,		//lastNames
		req.body.email,			//email
		req.body.isVerified,	//isVerified
		req.body.nickname,		//nickname
		req.body.profileImage,	//profileImage
		req.body.isFreelancer,	//isFreelancer
		req.body.birthDate,		//birthDate
		req.body.country,		//country
		req.body.acceptedTerms,	//acceptedTerms
		req.body.personalId,	//personalId
		nDate,					//creationDate
		req.body.recLevel,		//recLevel
		req.body.location,		//location
		req.body.job,			//job
		req.body.description,	//description
	]
	valores.forEach(val => {
		queryInsert += " '" + val + "', ";
	});

	queryInsert = queryInsert.substring(0, queryInsert.length - 2);
	queryInsert += ")";

	conexion.query(queryInsert, (error, results) => {
		if (error) {
			console.log(error);
			res.send(false);
		} else {
			res.send(true);
		}
	});
}
exports.updateUser = (req, res) => {
	let queryUpdate = "UPDATE mydb.User SET "; 
	let valores = [
		"names = '" + 			req.body.names				+"'",	//names
		"lastNames = '" + 		req.body.lastNames			+"'",	//lastNames
		"isVerified = '" + 		req.body.isVerified			+"'",	//isVerified
		"nickname = '" + 		req.body.nickname			+"'",	//nickname
		"profileImage = '" + 	req.body.profileImage		+"'",	//profileImage
		"isFreelancer = '" + 	req.body.isFreelancer		+"'",	//isFreelancer
		"birthDate = '" + 		req.body.birthDate			+"'",	//birthDate
		"country = '" + 		req.body.country			+"'",	//country
		"acceptedTerms = '" + 	req.body.acceptedTerms		+"'",	//acceptedTerms
		"location = '" + 		req.body.location			+"'",	//location
		"job = '" + 			req.body.job				+"'",	//job
		"description = '" + 	req.body.description		+"'",	//description
	]
	valores.forEach(val => {
		queryUpdate += val + ", ";
	});
	queryUpdate = queryUpdate.substring(0, queryUpdate.length - 2);
	queryUpdate += " WHERE personalId = '" + req.params.id + "'";
	conexion.query(queryUpdate, (error, results) => {
		if (error) {
			console.log(error);
			res.send(false);
		} else {
			res.send(true);
		}
	});
}

exports.deleteUser = (req, res) => {
	const idUser = req.params.id;
	conexion.query('delete from User where id = ' + idUser, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Se elimino el User con ID' + idUser);
		}
	});
}