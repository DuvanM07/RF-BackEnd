const ProductModel = require("../models/product.model");

function getProducts( req, res ) {
    res.json({
        ok: true,
        msg: 'Obtiene todos los productos'
    });
}

async function createProduct( req, res ) {
    const inputData = req.body;

    try {
        /** Consulta a la BD (Responsabilidad del Servicio) */
        const data = await ProductModel.create( inputData );  // Mongoose registra en MongoDB

        res.json({
            ok: true,
            data: data
        });    
    } 
    catch ( error ) {
        console.error( error );       // Imprime error al Desarrollador
        // Envia un mensaje de error legible al cliente
        res.json({                  
            ok: false,
            msg: 'Ha ocurrido una excepcion al registrar los datos'
        });
    }

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