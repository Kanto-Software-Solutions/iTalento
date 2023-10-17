const express 	= require('express');
const error 	= require('jquery');

const conexion	= require('../database/db');
const route		= require('./router');

//insertar datos base de datos

//update datos


//


//Funciones de la base de datos

const test = (req,res) => {
		res.send("Test");
};

//Export para su uso en otros archivos
exports.test			= test;