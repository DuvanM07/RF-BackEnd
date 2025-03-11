const deliveryModel = require("../models/delivery.model");
const ProductModel = require("../models/product.model");

async function insertDelivery( newDelivery ) {
    return await deliveryModel.create( newDelivery); 
}
async function getDeliveryById( id ) {
    return await deliveryModel.findById(
        id,
        { password: 0, createdAt: 0, updatedAt: 0}
    );
}
module.exports = {
    insertDelivery,
    getDeliveryById
}