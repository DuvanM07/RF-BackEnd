const express = require( 'express' );

const { createCategory, getCategories, getCategoryById, deleteCategoryById, updateCategoryById } = require('../controllers/category.controller');
const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();


// http://localhost:<port>/api/categories/
router.get( '/', getCategories );

// http://localhost:<port>/api/categories/
router.post( '/', createCategory );

// http://localhost:<port>/api/categories/<category-id>
// req.params.pedro = 7654ftgyhuji
router.get( '/:id', validateId, getCategoryById );

// http://localhost:<port>/api/categories/<category-id>
router.delete( '/:id', validateId, deleteCategoryById );

// http://localhost:<port>/api/categories/<category-id>
router.patch( '/:id', validateId, updateCategoryById );


module.exports = router;