const CategoryModel = require("../models/category.model");
const { dbInsertCategory, dbGetCategories, dbGetCategoryById, dbDeleteCategoryById, dbUpdateCategoryById } = require("../services/category.service");

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
        if ( error.name === 'ValidationError' ) {
            const errors = {};
            
            /** Itera errores de validaciones implementadas en las propiedades del modelo */
            for ( const key in error.errors ) {
                errors[ key ] = error.errors[ key ].message;
            }

            console.error( error );                         // Imprime error al Desarrollador
            return res.status( 400 ).json({ errors });      // Envia un mensaje de error legible al cliente
        } 

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

async function deleteCategoryById( req, res ) {
    const id = req.params.id;
    
    try {
        const data = await dbDeleteCategoryById( id );

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
            msg: 'Ha ocurrido una excepcion al eliminar una categoria por ID'
        });
    }

}

async function updateCategoryById( req, res ) {
    const id = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await dbUpdateCategoryById( id, inputData );

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
            msg: 'Ha ocurrido una excepcion al actualizar una categoria por ID'
        });
    }

}


module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    deleteCategoryById,
    updateCategoryById
}