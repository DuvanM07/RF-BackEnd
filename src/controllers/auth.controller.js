const { verifyEncriptedPassword } = require("../helpers/bcrypt.helper");
const removePropertiesToObject = require("../helpers/delete-document-properties.helper");
const { generateToken } = require("../helpers/jwt.helper");
const { dbGetUserByUsername, dbInsertUser } = require("../services/user.service");

async function registerUser( req, res ) {
    // Paso 1: Obtener los datos a registrar (usuario)
    const inputData = req.body;

    try {
        // Paso 2: Verificar si el usuario existe BD  ---> email
        const userFound = await dbGetUserByUsername( inputData.username );

        if( userFound ) {
            return res.json({
                ok: false,
                msg: 'El usuario ya existe.'
            });
        }

        // Paso 3: Registrar usuario (No existe)
        const data =  await dbInsertUser( inputData );
        console.log( data );   
        
        // Paso Opcional: Generar las credenciales (Token) y esto autenticara al usuario

        // Paso 4: Responder al cliente, si el usuario a sido registrado
        res.json({
            ok: true,
            data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al registrar usuario'
        });
    }
    
}

async function loginUser( req, res ) {
    // Paso 1: Obtener los datos para autenticar el usuario (username, password) 
    const inputData = req.body;

    try {
        // Paso 2: Verificar si el usuario existe en la BD  -->  email
        const userFound = await dbGetUserByUsername( inputData.username );
        
        if( ! userFound ) {
            return res.json({
                ok: false,
                msg: 'El usuario no existe. Por favor registrese'
            });
        }

        // Paso 3: Verificar si la contrasenia conhincide
        const isValidPassword = verifyEncriptedPassword( inputData.password, userFound.password );

        if( ! isValidPassword ) {
            return res.json({
                ok: false,
                msg: 'Contraseña invalida'
            });
        }

        // Paso 4: Generar credencial para autenticacion pasiva (Token)
        const payload = {
            id: userFound._id,
            name: userFound.name,
            username: userFound.username,
            role: userFound.role
        };
        
        const token = generateToken( payload );

        // Paso 5: Eliminar propiedades del objeto (password)
        const objUserFound = removePropertiesToObject({ obj: userFound, properties: [ 'password' ] });

        // Paso 6: Responder al cliente enviandole el Token y los datos actualizados del usuario autenticado
        res.json({
            ok: true,
            token,
            data: objUserFound
        });

    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al ingresar a la aplicacion'
        });        
    }
}

const reNewToken = async ( req, res ) => {
    // Paso 1: Obtener el payload previamente validado que esta activo y es de un usuario autenticado 
    const payload = req.authUser;

    try {
        // Paso 2: Verificar si el usuario existe DB ---> email
        const userFound = await dbGetUserByUsername( payload.username );

        if( ! userFound ) {
            return res.status( 404 ).json({
                ok: false,
                msg: 'El usuario no esta registrado. Por favor registrese!'
            });
        } 

        // Paso 3: Renovar el Token
        const token = generateToken({
            id: userFound._id,
            username: userFound.username,
            name: userFound.name,
            role: userFound.role
        });

        // Paso 4: Eliminar propiedades del objeto (password)
        const objUserFound = removePropertiesToObject({ obj: userFound, properties: [ 'password' ] });

        // Paso 5: Responder al cliente enviandole el Token y los datos actualizados del usuario autenticado
        res.json({
            ok: true,
            token, 
            data: objUserFound
        });
    } 
    catch ( error ) {
        res.status( 500 ).json({
            ok: false,
            msg: 'Token no valido',
            error: error
        });
    }

}
   

module.exports = {
    registerUser,
    loginUser,
    reNewToken
};