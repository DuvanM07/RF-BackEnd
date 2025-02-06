const CategoryModel = require("../models/category.model");

async function dbInsertCategory( newCategory ) {
    return await CategoryModel.create( newCategory );
}

async function dbGetCategories() {
    return await CategoryModel.find({});     // Mongoose obtiene todos los datos en MongoDB
}

module.exports = {
    dbInsertCategory,
    dbGetCategories
}