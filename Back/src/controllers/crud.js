const express 	= require('express');
const error 	= require('jquery');

const conexion	= require('./db');
const route		= require('./router');

//insertar datos base de datos
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

exports.createCertificate = (req,res) =>{
	const idCertificate = req.body.idCertificate;
	const name = req.body.name;
	const institution = req.body.institution;
	const year = req.body.year;


	conexion.query("INSERT INTO Certificate (idCertificate, name, institution, year) VALUES ( '" + idCertificate + "' ,'" + name + "' , '" + institution + "' , '" + year + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó el certificado ");
			res.redirect('/home');
		}
	});
}



exports.createRed = (req,res) =>{
	const id = req.body.id;
	const nombreRed = req.body.nombreRed;
	const linkRed = req.body.linkRed;

	conexion.query("INSERT INTO Red (id, nombreRed, linkRed) VALUES ( '" + id + "' ,'" + nombreRed + "' , '" + linkRed + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó la red ");
			res.redirect('/personas');
		}
	});
}

//update datos

exports.updateUsuario = (req,res) =>{
	const id = req.body.id;
	const email = req.oidc.user.email;
	const password = req.body.password;
	const username = req.body.username;
	const firstName = req.oidc.user.given_name;
	const lastName = req.oidc.user.family_name;
	const description = req.body.description;
	const profileImage = req.oidc.user.picture;
	const isBuyer = req.body.isBuyer;
	const isBoth = req.body.isBoth;
	const isFreelancer = req.body.isFreelancer;
	const createdAt = req.body.createdAt;

	let query = ('update usuario set id =' + id[0] + ' , email="'+email+'",password="'+password+ '", username = '+ username +' , firstName= '+firstName+', lastName = '+lastName+', description = '+description+', profileImage = '+profileImage + ', isBuyer = '+isBuyer + ', isBoth = '+isBoth + ', isFreelancer = '+isFreelancer + ' where id ='+id[0] );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se creó el usuario: " + firstName + " " + lastName);
			res.redirect('/personas');
		}
	});
}





//Funciones de la base de datos
const usuarios = (req,res) => {
	const id = req.body.id;
	const nombre = req.body.Nombre;
	const contraseña = req.body.Contraseña;
	
	conexion.query("SELECT * FROM Usuario", (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};



const publicaciones = (req,res) => {
	const id = req.body.PublicacionID;
	const autor = req.body.AutorID;
	const contenido = req.body.Contenido;

	conexion.query("SELECT * FROM publicacion", (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};

const test = (req,res) => {
		res.send("Test");
};

//Export para su uso en otros archivos
exports.usuarios		= usuarios;
exports.publicaciones	= publicaciones;
exports.test			= test;