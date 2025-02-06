const { dbGetUsers, dbInsertUser, dbGetUserById, dbDeleteUserById, dbUpdateUserById } = require("../services/user.service");


async function createUser( req, res ) {
    const inputData = req.body;

    try {
        const data = await dbInsertUser( inputData );

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
            msg: 'Ha ocurrido una excepcion al registrar un usuario'
        });
    }

}

async function getUsers( req, res ) {

    try {
        const data = await dbGetUsers();

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
            msg: 'Ha ocurrido una excepcion al obtener todos los usuarios'
        });
    }

}

async function getUserById( req, res ) {
    const id = req.params.id;

    try {
        const data = await dbGetUserById( id );

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
            msg: 'Ha ocurrido una excepcion al obtener un usuario por ID'
        });
    }
    
} 

async function deleteUserById( req, res ) {
    const id = req.params.id;
    
    try {
        const data = await dbDeleteUserById( id );

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

async function updateUserById( req, res ) {
    const id = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await dbUpdateUserById( id, inputData );

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
            msg: 'Ha ocurrido una excepcion al actualizar un usuario por ID'
        });
    }

}


module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUserById,
    updateUserById
}