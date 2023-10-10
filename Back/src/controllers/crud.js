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

exports.createLanguaje = (req,res) =>{
	const idLanguaje = req.body.idLanguaje;
	const name = req.body.name;

	conexion.query("INSERT INTO Languaje (idLanguaje, name) VALUES ( '" + idLanguaje + "' ,'" + name + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó el idioma ");
			res.redirect('/home');
		}
	});
}

exports.createAbility = (req,res) =>{
	const idAbility = req.body.idAbility;
	const name = req.body.name;

	conexion.query("INSERT INTO Ability (idAbility, name) VALUES ( '" + idAbility + "' ,'" + name + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó el idioma ");
			res.redirect('/home');
		}
	});
}

exports.createOrder = (req,res) =>{
	const idOrder = req.body.idOrder;
	const createdAt = req.body.createdAt;
	const status = req.body.status;
	const idUser = req.body.idUser;
	const idGig = req.body.idGig;

	conexion.query("INSERT INTO Order (idOrder, createdAt, status,idUser,idGig) VALUES ( '" + idOrder + "' ,'" + createdAt + "' ,'" + status + "' ,'" + idUser + "' ,'" + idGig + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó la orden ");
			res.redirect('/home');
		}
	});
}

exports.createReview = (req,res) =>{
	const idReview = req.body.idReview;
	const User_idUser = req.body.User_idUser;
	const Gig_idGig = req.body.Gig_idGig;
	const createdAt = req.body.createdAt;
	const rating = req.body.rating;
	const title = req.body.title;
	const description = req.body.description;

	conexion.query("INSERT INTO Review (idReview, User_idUser, Gig_idGig,createdAt,rating,title,description) VALUES ( '" + idReview + "' ,'" + User_idUser + "' ,'" + Gig_idGig + "' ,'" + createdAt + "' ,'" + rating + "' ,'" + title + "' ,'" + description + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó la review ");
			res.redirect('/home');
		}
	});
}


exports.createGig = (req,res) =>{
	const idGig = req.body.idGig;
	const name = req.body.name;
	const description = req.body.description;
	const createdAt = req.body.createdAt;
	const Gigcol = req.body.Gigcol;
	const idCategory = req.body.idCategory;
	const idUser = req.body.idUser;
	const price = req.body.price;
	const deliveryDays = req.body.deliveryDays;

	conexion.query("INSERT INTO Gig (idGig, name, description,createdAt,Gigcol,idCategory,idUser,price,deliveryDays) VALUES ( '" + idGig + "' ,'" + name + "' ,'" + description + "' ,'" + createdAt + "' ,'" + Gigcol + "' ,'" + idCategory + "' ,'" + idUser + "' ,'" + price + "' ,'" + deliveryDays + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó el gig ");
			res.redirect('/home');
		}
	});
}


//update datos

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


exports.updateCertificate = (req,res) =>{
	const idCertificate = req.body.idCertificate;
	const name = req.body.name;
	const institution = req.body.institution;
	const year = req.body.year;

	let query = ('update Certificate set idCertificate =' + idCertificate + ' , name="'+name+'",institution="'+institution+ '", year = '+ year );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo el certificados: " + names + " " + lastNames);
			res.redirect('/home');
		}
	});
}

exports.updateLanguaje = (req,res) =>{
	const idLanguaje = req.body.idLanguaje;
	const name = req.body.name;

	let query = ('update Languaje set idLanguaje =' + idLanguaje + ' , name="'+name+'",institution="'+institution+ '", year = '+ year );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo el Lenguaje: " + names + " " + lastNames);
			res.redirect('/home');
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