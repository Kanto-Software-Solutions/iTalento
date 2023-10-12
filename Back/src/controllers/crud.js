const express 	= require('express');
const error 	= require('jquery');

const conexion	= require('../database/db');
const route		= require('./router');

//insertar datos base de datos

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



//update datos


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
			console.log("Se actualizo el certificados: ");
			res.redirect('/home');
		}
	});
}

exports.updateLanguaje = (req,res) =>{
	const idLanguaje = req.body.idLanguaje;
	const name = req.body.name;

	let query = ('update Languaje set idLanguaje =' + idLanguaje + ' , name="'+name);
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo el Lenguaje: ");
			res.redirect('/home');
		}
	});
}

exports.updateAbility = (req,res) =>{
	const idAbility = req.body.idAbility;
	const name = req.body.name;

	let query = ('update Ability set idAbility =' + idAbility + ' , name="'+name);
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo la habilidad: ");
			res.redirect('/home');
		}
	});
}


exports.updateOrder = (req,res) =>{
	const idOrder = req.body.idOrder;
	const createdAt = req.body.createdAt;
	const status = req.body.status;
	const idUser = req.body.idUser;
	const idGig = req.body.idGig;

	let query = ('update Order set idOrder =' + idOrder + ' , createdAt="'+createdAt+'",status="'+status+ '", idUser = '+ idUser + '", idGig = '+ idGig );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo la orden: ");
			res.redirect('/home');
		}
	});
}

exports.updateReview = (req,res) =>{
	const idReview = req.body.idReview;
	const User_idUser = req.body.User_idUser;
	const Gig_idGig = req.body.Gig_idGig;
	const createdAt = req.body.createdAt;
	const rating = req.body.rating;
	const title = req.body.title;
	const description = req.body.description;

	let query = ('update Review set idReview =' + idReview + ' , User_idUser="'+User_idUser+'",Gig_idGig="'+Gig_idGig+ '", createdAt = '+ createdAt + '", rating = '+ rating + '", title = '+ title + '", description = '+ description );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo la review: ");
			res.redirect('/home');
		}
	});
}

//Funciones de la base de datos

const test = (req,res) => {
		res.send("Test");
};

//Export para su uso en otros archivos
exports.test			= test;