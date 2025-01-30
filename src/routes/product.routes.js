const express = require( 'express' );
const router = express.Router();

// http://localhost:<port>/api/products/
router.get( '/', function( req, res ) {
    res.json({
        ok: true,
        msg: 'Obtiene todos los productos'
    })
} );
// http://localhost:<port>/api/products/
router.post( '/', function( req, res ) {
    res.json({
        ok: true,
        msg: 'Crea un nuevo producto'
    });
} );
// http://localhost:<port>/api/products/<product-id>
// req.params.pedro = 7654ftgyhuji
router.get( '/:id', function( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: 'Obtener un producto por ID: ' + id
    });
} );
// http://localhost:<port>/api/products/<product-id>
router.delete( '/:id', function( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: `Elimina un producto por ID: ${ id }`
    });
} );
// http://localhost:<port>/api/products/<product-id>
router.put( '/:id', function( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: `Actualiza todos los recursos de un producto por ID: ${ id }`
    });
} );
// http://localhost:<port>/api/products/<product-id>
router.patch( '/:id', function( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: `Actualiza parcialmente los recursos de un producto por ID: ${ id }`
    });
} );




module.exports = router;