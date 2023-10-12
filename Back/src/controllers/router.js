const express = require('express');
const router = express.Router();

const crud = require('./crud');
const usuario = require('./UserController');
const gig = require('./GigController');
const categoria = require('./CategoryController');
//Permite ser usado en otros archivos
module.exports = router;

//Segun el metodo de la peticion, se ejecuta la funcion correspondiente
router.get('/usuarios', 		usuario.getAllUsers);
router.get('/usuarios/:id',     usuario.getUserById);
router.get('/publicaciones',	gig.getAllGigs);
router.get('/categorias',       categoria.getAllCategories);
router.get('/test',				crud.test);