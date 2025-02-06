const CategoryModel = require("../models/category.model");
const { dbInsertCategory, dbGetCategories, dbGetCategoryById } = require("../services/category.service");

async function createCategory( req, res ) {
    const inputData = req.body;

    try {
        const data = await dbInsertCategory( inputData );

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

async function getCategories( req, res ) {

    try {
        const data = await dbGetCategories();

        res.json({
            ok: true,
            data: data
        });        
    } 
    catch ( error ) {
        console.error( error );         // Imprime error al Desarrollador
        // Envia un mensaje de error legible al cliente
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al obtener todos las categorias'
        });
    }

}

async function getCategoryById( req, res ) {
    const id = req.params.id;

    try {
        const data = await dbGetCategoryById( id );

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
            msg: 'Ha ocurrido una excepcion al obtener una categoria por ID'
        });
    }
    
} 


module.exports = {
    createCategory,
    getCategories,
    getCategoryById
}