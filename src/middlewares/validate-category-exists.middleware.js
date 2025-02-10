const { dbGetCategoryById } = require("../services/category.service");


const validateCategoryExists = async (req, res, next) => {
    const id = req.params.id;

    try {
        const dataFound = await dbGetCategoryById(id); // Función para buscar el producto en la base de datos
        
        if ( ! dataFound ) 
            return res.status( 404 ).json({ 
                ok: false, 
                msg: 'La categoria no existe' 
            });

        req.dataFound = dataFound; // Guardamos el producto en el request para usarlo después
        next();
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ 
            ok: false, 
            msg: 'Error al buscar el categoria'
        });
    }
};


module.exports = validateCategoryExists;