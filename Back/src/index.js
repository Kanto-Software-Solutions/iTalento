const express = require('express');
const morgan = require('morgan');
const { auth } = require('express-openid-connect');
const { v2 } = require ('cloudinary');

require('dotenv').config()

const app = express();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER
};

v2.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_APIKEY, 
  api_secret: process.env.CLOUD_SECRET 
});

/*
Sample Upload Cloudinary
v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });
*/

//Settings
app.set('port', 3000);

//Middlewares
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.use(morgan('dev'));
app.use(express.json());

//Rutas (Usa el router de express)
app.use('/',require('./controllers/router'));

//Static files (public)
app.use(express.static(__dirname + "/public"));

// Ruta al archivo HTML principal de Vue.js
app.get('*', (req, res) => {
	res.sendFile(__dirname + './public/index.html'); 
  });

//Puerto para correr
app.listen(app.get('port'), () => {
	console.log("Server on port http://localhost:" + app.get('port'));
});