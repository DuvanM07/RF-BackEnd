const CategoryModel = require("../models/category.model");

async function dbInsertCategory( newCategory ) {
    return await CategoryModel.create( newCategory );
}

async function dbGetCategories() {
    return await CategoryModel.find({});     // Mongoose obtiene todos los datos en MongoDB
}

async function dbGetCategoryById( id ) {
    return await CategoryModel.findById( id );           // Forma 1: Usando findById
    return await CategoryModel.findOne({ _id: id });     // Forma 2: Usando findOne
}

async function dbDeleteCategoryById( id ) {
    return await CategoryModel.findByIdAndDelete( id );           // Forma 1: Usando findByIdAndDelete
    return await CategoryModel.findOneAndDelete({ _id: id });     // Forma 2: Usando findOneAndDelete
}

async function dbUpdateCategoryById( id, newCategory ) {
    // Forma 1: Usando findByIdAndUpdate
    return await CategoryModel.findByIdAndUpdate( 
        id,                 // id del documento que se va a actualizar
        newCategory,         // Objeto con los datos a actualizar del documento
        { new: true }       // Retornar los nuevos cambios realizados
    );
    
    // Forma 2: Usando findOneAndUpdate
    return await CategoryModel.findOneAndUpdate(
        { _id: id },        // Objeto de consulta con el ID del documento que se va a actualizar
        newCategory,         // Objeto con los datos a actualizar del documento
        { new: true }       // Retornar los nuevos cambios realizados
    );
}


module.exports = {
    dbInsertCategory,
    dbGetCategories,
    dbGetCategoryById,
    dbDeleteCategoryById,
    dbUpdateCategoryById
}