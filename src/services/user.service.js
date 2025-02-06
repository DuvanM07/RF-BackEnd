const UserModel = require("../models/user.model");

async function dbInsertUser( newUser ) {
    return await UserModel.create( newUser );
}

async function dbGetUsers() {
    return await UserModel.find({});     // Mongoose obtiene todos los datos en MongoDB
}

async function dbGetUserById( id ) {
    return await UserModel.findById( id );           // Forma 1: Usando findById
    return await UserModel.findOne({ _id: id });     // Forma 2: Usando findOne
}

async function dbDeleteUserById( id ) {
    return await UserModel.findByIdAndDelete( id );           // Forma 1: Usando findByIdAndDelete
    return await UserModel.findOneAndDelete({ _id: id });     // Forma 2: Usando findOneAndDelete
}

async function dbUpdateUserById( id, newUser ) {
    // Forma 1: Usando findByIdAndUpdate
    return await UserModel.findByIdAndUpdate( 
        id,                 // id del documento que se va a actualizar
        newUser,         // Objeto con los datos a actualizar del documento
        { new: true }       // Retornar los nuevos cambios realizados
    );
    
    // Forma 2: Usando findOneAndUpdate
    return await UserModel.findOneAndUpdate(
        { _id: id },        // Objeto de consulta con el ID del documento que se va a actualizar
        newUser,         // Objeto con los datos a actualizar del documento
        { new: true }       // Retornar los nuevos cambios realizados
    );
}


module.exports = {
    dbInsertUser,
    dbGetUsers,
    dbGetUserById,
    dbDeleteUserById,
    dbUpdateUserById
}