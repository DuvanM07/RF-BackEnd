function getProducts( req, res ) {
    res.json({
        ok: true,
        msg: 'Obtiene todos los productos'
    });
}

function createProduct( req, res ) {
    res.json({
        ok: true,
        msg: 'Crea un nuevo producto'
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