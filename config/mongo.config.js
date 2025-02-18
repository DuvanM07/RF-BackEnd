const mongoose = require( 'mongoose' );

/** Configuracion para conectar MongoDB usando la dependencia MongooseJS usando Async/Await */
async function dbConection() {
    // try-catch: Se usa para manejar excepciones
    try {
        await mongoose.connect( 'mongodb://localhost:27017/db-r-finder', {} );      // Conectamos a la base de datos y retorna promesa
        console.log( 'Base de datos inicializada correctamente' );
    } 
    catch ( error ) {
        console.error( error );
        console.log( 'Ha ocurrido un error en la conexion de la BD' );
        // throw new Error( 'Error al inicializar la base datos' );
    }
    
}


/** Configuracion desde la pagina oficial de MongooseJS usando then-catch */
function conexionDB () {
    mongoose.connect( 'mongodb://localhost:27017/db-r-finder', {})
        .then( function( data ) {
            console.log( 'Base de datos conectada exitosamente' );
        } )
        .catch( function( error ) {
            console.error( error );
            console.log( 'Ha ocurrido un error en la conexion de la BD' );
        } );
}


module.exports = dbConection;       // Exportando la configuracion
//module.exports = conexionDB;