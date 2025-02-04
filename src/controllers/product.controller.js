const ProductModel = require("../models/product.model");

function getProducts( req, res ) {
    res.json({
        ok: true,
        msg: 'Obtiene todos los productos'
    });
}

async function createProduct( req, res ) {
    const inputData = req.body;

    /** Consulta a la BD (Responsabilidad del Servicio) */
    const data = await ProductModel.create( inputData );  // Mongoose registra en MongoDB

    res.json({
        ok: true,
        data: data
    });
}

function getProductById( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: 'Obtener un producto por ID: ' + id
    });
} 

function deleteProductById( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: `Elimina un producto por ID: ${ id }`
    });
}

function updateProductByIdPut( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: `Actualiza todos los recursos de un producto por ID: ${ id }`
    });
}

function updateProductByIdPatch( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: `Actualiza parcialmente los recursos de un producto por ID: ${ id }`
    });
}

// module.exports = getProducts;  // Export Default
module.exports = {
    getProducts,
    createProduct,
    getProductById,
    deleteProductById,
    updateProductByIdPut,
    updateProductByIdPatch
};