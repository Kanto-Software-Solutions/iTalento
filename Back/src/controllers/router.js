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
const authCon = require('./AuthController');
const ban = require('./ReportController');

//Permite ser usado en otros archivos
module.exports = router;

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Segun el metodo de la peticion, se ejecuta la funcion correspondiente
router.put('/editar/usuario/:id',   urlencodedParser,   usuario.updateUser);
router.put('/editar/publicacion/:id',urlencodedParser,  gig.updateGig);
router.get('/miInfo',                                   authCon.myUsuario);
router.get('/usuarios', 		                        usuario.getAllUsers);
router.get('/usuarios/:id',                             usuario.getUserById);
router.get('/publicaciones',	                        gig.getAllGigs);
router.get('/report/:id',                           ban.getReport);
router.get('/publicaciones/:id',	                    gig.getGigById);
router.get('/publicaciones/user/:id',                   gig.getGigByUser);
router.get('/categorias',                               categoria.getAllCategories);
router.get('/categorias/:id',                           categoria.getCategoryById);
router.get('/test',				                        crud.test);
router.get('/gig/:id',                           gig.getAllGigsByCategory);
router.post('/order/neworder/:id',   urlencodedParser,   orden.createOrder);
router.post('/review/newreview',     urlencodedParser,  resenia.createReview);
router.post('/certificate/newcertificate',     urlencodedParser,  certificado.createCertificate);
router.post('/languaje/newlanguaje',     urlencodedParser,  lenguaje.createLanguage);
router.post('/nuevo/usuario',       urlencodedParser,   usuario.createUser);
router.post('/nuevo/publicacion',   urlencodedParser,   gig.createGig);
router.post('/report/NewReport',     urlencodedParser,  ban.createReport);
router.delete('/borrar/:id',                          gig.deleteGig);
router.delete('/usuario/borrar:id',                          usuario.deleteUser);
router.delete('/order/borrar:id',                          orden.deleteOrder);
router.delete('/usuarios/:id',                          usuario.deleteUser);
