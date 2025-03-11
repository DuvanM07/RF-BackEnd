const express = require( 'express');
const { createDelivery, getDelivery } = require('../controllers/delivery.controller');
const { getDeliveryById } = require('../services/delivery.service');


const router = express.Router();

router.post( '/', createDelivery );

router.get( '/:id', getDelivery )

module.exports = router;