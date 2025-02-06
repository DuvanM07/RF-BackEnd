const express = require( 'express' );
const { createCategory, getCategories, getCategoryById, deleteCategoryById } = require('../controllers/category.controller');
const router = express.Router();

// http://localhost:<port>/api/categories/
router.get( '/', getCategories );

// http://localhost:<port>/api/categories/
router.post( '/', createCategory );

// http://localhost:<port>/api/categories/<category-id>
// req.params.pedro = 7654ftgyhuji
router.get( '/:id', getCategoryById );

// http://localhost:<port>/api/categories/<category-id>
router.delete( '/:id', deleteCategoryById );

// http://localhost:<port>/api/categories/<category-id>
router.patch( '/:id', function( req, res ) {
    res.json({
        ok: true,
        msg: 'Actualiza catetoria por ID'
    });
} );


module.exports = router;