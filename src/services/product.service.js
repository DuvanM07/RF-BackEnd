const ProductModel = require("../models/product.model");

async function dbInsertProduct( newProduct ) {
    /** Consulta a la BD (Responsabilidad del Servicio) */
    return await ProductModel.create( newProduct );    // Mongoose registra en MongoDB
}

async function dbGetProducts() {
    return await ProductModel.find({});     // Mongoose obtiene todos los datos en MongoDB
}


module.exports = {
    dbInsertProduct,
    dbGetProducts
};