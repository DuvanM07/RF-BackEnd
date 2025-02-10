const express = require( 'express' );

const { getUsers, createUser, getUserById, deleteUserById, updateUserById } = require('../controllers/user.controller');
const validateUserExists = require('../middlewares/validate-user-exists.middleware');

const router = express.Router();


// http://localhost:<port>/api/users/
router.get( '/', getUsers );

// http://localhost:<port>/api/users/
router.post( '/', validateUserExists, createUser );

// http://localhost:<port>/api/users/<category-id>
// req.params.pedro = 7654ftgyhuji
router.get( '/:id', getUserById );

// http://localhost:<port>/api/users/<category-id>
router.delete( '/:id', deleteUserById );

// http://localhost:<port>/api/users/<category-id>
router.patch( '/:id', updateUserById );


module.exports = router;