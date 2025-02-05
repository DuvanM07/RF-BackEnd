const CategoryModel = require("../models/category.model");

async function createCategory( req, res ) {
    const inputData = req.body;

    try {
        const data = await CategoryModel.create( inputData );

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


module.exports = {
    createCategory
}