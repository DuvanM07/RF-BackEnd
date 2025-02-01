const express = require( 'express' );
const dbConection = require('./config/mongo.config.js');
// const conexionDB = require('./config/mongo.config.js');
const app = express();


// Ejecuta la configuracion de Mongoose para Mongo
//dbConection();      
// conexionDB();       


/** Endpoints del sitio */
// http://localhost:<port>/api/products
app.use( '/api/products', require( './routes/product.routes.js' ) );


/** Lanzar servidor: http://localhost:<port> */
app.listen( 3000, function() {
    console.log( 'Servidor escuchando en el puerto 3000' );
});