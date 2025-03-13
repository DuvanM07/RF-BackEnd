const { insertDelivery, getDeliveryById } = require( "../services/delivery.service")

async function createDelivery( req, res ) { 
    const inputData = req.body;

    try {
        const data = await insertDelivery( inputData);
        res.json({
            ok: true,
            data: data
        })
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: "Ha ocurrido una Excepcion al registrar el pedido"
        })
    }
}


async function getDelivery( req, res) {
    const id = req.params.id;
    try {
        const data = await getDeliveryById( id );

        res.json({
            ok: true,
            data: data
        });
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al obtener los datos'
        });
        
    }
}
module.exports = {
    createDelivery, getDelivery
}