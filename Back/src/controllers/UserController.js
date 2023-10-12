const conexion	= require('../database/db');

exports.getAllUsers = (req,res) => {
	conexion.query("SELECT * FROM User", (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};

exports.createUser = (req,res) =>{
	const idUser = req.body.id;
	const names = req.oidc.user.family_name;
	const lastNames = req.oidc.user.given_name;
	const email = req.oidc.user.email;
	const isVerified = req.body.isVerified;
	const nickname  = req.oidc.user.nickname;
	const profileImage = req.oidc.user.picture;
	const isFreelancer = req.body.isFreelancer;
	const birthDate = req.body.birthDate;
	const country = req.body.country;
	const acceptedTerms = req.body.acceptedTerms;
	const personalId = req.body.personalId;
	conexion.query("INSERT INTO User (idUser,names, lastNames, email, isVerified, nickname, profileImage, isFreelancer, birthDate, country, acceptedTerms, personalId) VALUES ( '" + idUser + "' ,'" + names + "' , '" + lastNames + "' ,'" + email + "' , '" + isVerified + "' , '" + nickname + "' , " + profileImage + ", " + isFreelancer + ", " + birthDate + ", " + country + ", " + acceptedTerms + ", " + personalId +")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se creó el usuario: " + firstName + " " + lastName);
			res.redirect('/home');
		}
	});
}

exports.updateUser = (req,res) =>{
	const idUser = req.body.id;
	const names = req.oidc.user.family_name;
	const lastNames = req.oidc.user.given_name;
	const email = req.oidc.user.email;
	const isVerified = req.body.isVerified;
	const nickname  = req.oidc.user.nickname;
	const profileImage = req.oidc.user.picture;
	const isFreelancer = req.body.isFreelancer;
	const birthDate = req.body.birthDate;
	const country = req.body.country;
	const acceptedTerms = req.body.acceptedTerms;
	const personalId = req.body.personalId;

	let query = ('update User set idUser =' + idUser[0] + ' , names="'+names+'",lastNames="'+lastNames+ '", email = '+ email +' , isVerified= '+isVerified+', nickname = '+nickname+', profileImage = '+profileImage+', isFreelancer = '+isFreelancer + ', birthDate = '+birthDate + ', country = '+country + ', acceptedTerms = '+acceptedTerms + ' personalId ='+personalId );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo el usuario: " + names + " " + lastNames);
			res.redirect('/home');
		}
	});
}
