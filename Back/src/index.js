const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { auth } = require('express-openid-connect');
const { v2 } = require('cloudinary');

require('dotenv').config()

const app = express();

app.use(cors({
	origin: 'http://localhost:8080',
}));

const config = {
	authRequired: false,
	auth0Logout: true,
};

v2.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_APIKEY,
	api_secret: process.env.CLOUD_SECRET,
});


//Settings
app.set('port', 3000);

//Middlewares
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use(morgan('dev'));
app.use(express.json());

//Rutas (Usa el router de express)
app.use('/', require('./controllers/router'));

//Static files (public)
app.use(express.static(__dirname + "/public"));

// Ruta al archivo HTML principal de Vue.js
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

//Puerto para correr
app.listen(app.get('port'), () => {
	console.log("Server on port http://localhost:" + app.get('port'));
});