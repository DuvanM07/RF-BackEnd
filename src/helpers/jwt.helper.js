const jwt = require( 'jsonwebtoken' );


function generateToken ( payload ) {
    return jwt.sign( 
        payload,                    // Payload (Carga Util)
        'Sid?6&n,3oI0',       // Seed: Palabra Secreta (Semilla) 
        { expiresIn: '1h' }         // Configuracion (Expiracion del Token)
    );
}

function verifyToken ( token ) {
    return jwt.verify( 
        token,                      // Token valido 
        'Sid?6&n,3oI0'        // Seed: Palabra Secreta (Semilla) 
    );
}


module.exports = {
    generateToken,
    verifyToken
};