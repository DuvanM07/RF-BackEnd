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

module.exports = {
    dbInsertCategory,
    dbGetCategories,
    dbGetCategoryById
}