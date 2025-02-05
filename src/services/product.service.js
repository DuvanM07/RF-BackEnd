const ProductModel = require("../models/product.model");

async function dbInsertProduct( newProduct ) {
    /** Consulta a la BD (Responsabilidad del Servicio) */
    return await ProductModel.create( newProduct );    // Mongoose registra en MongoDB
}

async function dbGetProducts() {
    return await ProductModel.find({});     // Mongoose obtiene todos los datos en MongoDB
}

async function dbGetProductById( id ) {
    return await ProductModel.findById( id );           // Forma 1: Usando findById
    return await ProductModel.findOne({ _id: id });     // Forma 2: Usando findOne
}


module.exports = {
    dbInsertProduct,
    dbGetProducts,
    dbGetProductById
};