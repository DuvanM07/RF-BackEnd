const UserModel = require("../models/user.model");

async function dbInsertUser( newUser ) {
    return await UserModel.create( newUser );
}

async function dbGetUsers() {
    // Mongoose obtiene todos los datos en MongoDB
    return await UserModel.find(
        {},
        { password: 0, createdAt: 0, updatedAt: 0 }
    );
}

async function dbGetUserById( id ) {
    // Forma 1: Usando findById
    return await UserModel.findById( 
        id, 
        { password: 0, createdAt: 0, updatedAt: 0, _id: 0 } 
    );           
    // Forma 2: Usando findOne
    return await UserModel.findOne( { _id: id } ).select('-password -createdAt -updatedAt -_id');
}

async function dbDeleteUserById( id ) {
    // Forma 1: Usando findByIdAndDelete
    return await UserModel.findByIdAndDelete( 
        id,
        { password: 0 }
    );           
    // Forma 2: Usando findOneAndDelete
    return await UserModel.findOneAndDelete(
        { _id: id },
        { password: 0 }
    );     
}

async function dbUpdateUserById( id, newUser ) {
    // Forma 1: Usando findByIdAndUpdate
    return await UserModel.findByIdAndUpdate( 
        id,                 // id del documento que se va a actualizar
        newUser,            // Objeto con los datos a actualizar del documento
        { new: true, select: '-password' }      // Retornar los nuevos cambios realizados  
    );
    
    // Forma 2: Usando findOneAndUpdate
    return await UserModel.findOneAndUpdate(
        { _id: id },        // Objeto de consulta con el ID del documento que se va a actualizar
        newUser,         // Objeto con los datos a actualizar del documento
        { new: true}       // Retornar los nuevos cambios realizados
    ).select( '-password' );
}

const dbGetUserByUsername = async ( email ) => {
    return await UserModel.findOne({ username: email });
}


module.exports = {
    dbInsertUser,
    dbGetUsers,
    dbGetUserById,
    dbDeleteUserById,
    dbUpdateUserById,
    dbGetUserByUsername
}