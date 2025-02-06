const CategoryModel = require("../models/category.model");

async function dbInsertCategory( newCategory ) {
    return await CategoryModel.create( newCategory );
}

module.exports = {
    dbInsertCategory
}