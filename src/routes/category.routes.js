const express = require( 'express' );
const { createCategory } = require('../controllers/category.controller');
const router = express.Router();

// http://localhost:<port>/api/categories/
router.get( '/', function( req, res ) {
    res.json({
        ok: true,
        msg: 'Obtiene todas las catetorias'
    });
});

// http://localhost:<port>/api/categories/
router.post( '/', createCategory );

// http://localhost:<port>/api/categories/<category-id>
// req.params.pedro = 7654ftgyhuji
router.get( '/:id', function( req, res ) {
    res.json({
        ok: true,
        msg: 'Obtener categoria por ID'
    });
} );

// http://localhost:<port>/api/categories/<category-id>
router.delete( '/:id', function( req, res ) {
    res.json({
        ok: true,
        msg: 'Eliminar categoria por ID'
    });
} );

// http://localhost:<port>/api/categories/<category-id>
router.patch( '/:id', function( req, res ) {
    res.json({
        ok: true,
        msg: 'Actualiza catetoria por ID'
    });
} );


module.exports = router;