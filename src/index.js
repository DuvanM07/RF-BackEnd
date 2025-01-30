const express = require( 'express' );
const app = express();


/** Endpoints del sitio */
app.get( '/', function( req, res ) {
    res.send( '<h1>Home</h1>' );
});
app.get( '/about-us', function( req, res ) {
    res.send( '<h1>About us</h1>' );
});
app.get( '/contact', function( req, res ) {
    res.send( '<h1>Contact</h1>' );
});
app.get( '/api', function( req, res ) {
    res.json({
        name: 'Restaurant Finder',
        msg: 'Bienvenidos a Restaurant Finder'
    });
});



/** Lanzar servidor: http://localhost:<port> */
app.listen( 3000, function() {
    console.log( 'Servidor escuchando en el puerto 3000' );
});