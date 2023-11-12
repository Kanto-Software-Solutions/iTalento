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

exports.getUserById = (req, res) => {
	conexion.query("SELECT * FROM User WHERE nickname = '" + req.params.id + "'", (error, results) => {
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
	
	conexion.query( queryInsert, (error, results) => {
		if (error) {
			console.log(error);
			res.send(false);
		} else {
			res.send(true);
		}
	});
}

exports.updateUser = (req, res) => {
	const idUser = req.params.id;
	const names = req.oidc.user.family_name;
	const lastNames = req.oidc.user.given_name;
	const email = req.oidc.user.email;
	const isVerified = req.body.isVerified;
	const nickname = req.oidc.user.nickname;
	const profileImage = req.oidc.user.picture;
	const isFreelancer = req.body.isFreelancer;
	const birthDate = req.body.birthDate;
	const country = req.body.country;
	const acceptedTerms = req.body.acceptedTerms;
	const personalId = req.body.personalId;

	let query = ('update User set idUser =' + idUser[0] + ' , names="' + names + '",lastNames="' + lastNames + '", email = ' + email + ' , isVerified= ' + isVerified + ', nickname = ' + nickname + ', profileImage = ' + profileImage + ', isFreelancer = ' + isFreelancer + ', birthDate = ' + birthDate + ', country = ' + country + ', acceptedTerms = ' + acceptedTerms + ' personalId =' + personalId);
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log("Se actualizo el usuario: " + names + " " + lastNames);

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