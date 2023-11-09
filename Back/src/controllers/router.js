const express		= require('express');
const router		= express.Router();
const bodyParser	= require('body-parser')

const crud			= require('./crud');
const usuario		= require('./UserController');
const gig			= require('./GigController');
const categoria 	= require('./CategoryController');
const habilidad 	= require('./AbilityController');
const orden			= require('./OrderController');
const resenia		= require('./ReviewController');
const certificado	= require('./CertificateController');
const lenguaje		= require('./LanguageController');
const authCon		= require('./AuthController');
const ban			= require('./ReportController');

//Permite ser usado en otros archivos
module.exports = router;

// create */json parser y */x-www-form-urlencoded parser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/************************ Metodos *******************************/
//Usuario
	//all
router.get(		'/usr/all', 							usuario.getAllUsers);

router.post(	'/usr/new',			urlencodedParser,	usuario.createUser);
router.put(		'/usr/edit/:id',	urlencodedParser,	usuario.updateUser);
router.delete(	'/usr/delete/:id',						usuario.deleteUser);
router.get(		'/usr/:id',								usuario.getUserById);

//Gig
	//all
router.get(		'/gig/all',								gig.getAllGigs);
router.get(		'/gig/usr/:id',							gig.getGigByUser);
router.get(		'/gig/cat/:id',							gig.getAllGigsByCategory);

router.post(	'/gig/new',			urlencodedParser,	gig.createGig);
router.put(		'/gig/edit/:id',	urlencodedParser,	gig.updateGig);
router.delete(	'/gig/delete:id',						gig.deleteGig);
router.get(		'/gig/:id',								gig.getGigById);

//Categorias
	//all
router.get(		'/cat/all',								categoria.getAllCategories);
//router.get(	'/cat/usr/:id',							categoria.getAllCategoriesByUser);
//router.get(	'/cat/gig/:id',							categoria.getAllCategoriesByGig);

//router.get(	'/cat/:name',							categoria.getCategoryByName);
router.post(	'/cat/new',			urlencodedParser,	categoria.createCategory);
//router.put(	'/cat/edit/:id',	urlencodedParser,	categoria.updateCategory);
router.delete(	'/cat/delete:id',						categoria.deleteCategory);
router.get(		'/cat/:id',								categoria.getCategoryById);

//Orden
	//all
//router.get(	'/odr/usr/:id',							orden.getAllOrdersByUser);
//router.get(	'/odr/gig/:id',							orden.getAllOrdersByGig);

router.post(	'/odr/new',			urlencodedParser,	orden.createOrder);
router.put(		'/odr/edit/:id',	urlencodedParser,	orden.updateOrder);
router.delete(	'/odr/delete:id',						orden.deleteOrder);
router.get(		'/odr/:id',								orden.getOrderById);

//Sesion
router.get('/sesion', authCon.myUsuario);

router.get('/report/:id', ban.getReport);
router.get('/test', crud.test);
router.post('/certificate/newcertificate', urlencodedParser, certificado.createCertificate);
router.post('/review/newreview', urlencodedParser, resenia.createReview);
router.post('/report/NewReport', urlencodedParser, ban.createReport);