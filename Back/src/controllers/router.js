const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')

const crud = require('./crud');
const usuario = require('./UserController');
const gig = require('./GigController');
const categoria = require('./CategoryController');
const habilidad = require('./AbilityController');
const orden = require('./OrderController');
const resenia = require('./ReviewController');
const certificado = require('./CertificateController');
const lenguaje = require('./LanguageController');

//Permite ser usado en otros archivos
module.exports = router;

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Segun el metodo de la peticion, se ejecuta la funcion correspondiente
router.get('/usuarios', 		                        usuario.getAllUsers);
router.get('/usuarios/:id',                             usuario.getUserById);
router.post('/nuevo/usuario',       urlencodedParser,   usuario.createUser);
router.get('/publicaciones',	                        gig.getAllGigs);
router.post('/nuevo/publicacion',   urlencodedParser,   gig.createGig);
router.get('/publicaciones/:id',	                    gig.getGigById);
router.get('/publicaciones/user/:id',                   gig.getGigByUser);
router.get('/categorias',                               categoria.getAllCategories);
router.get('/test',				                        crud.test);