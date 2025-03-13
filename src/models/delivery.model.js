const mongoose = require( 'mongoose');

const DeliverySchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        require: true    
    },
    products:[
        {
            product: {
                type: mongoose.Schema.ObjectId,
                ref: 'products',
                require: true
            },
            cantidad: {
                type: Number,
                min: 1,
                require: true
                
            }
        }
    ],
    total: {
        type: Number,
        default: 0
    },
    estado: {
        type: String,
        enum: [ 'Pendiente', 'Enviado', 'Recibido' ],
        default: 'Pendiente'
    }
},{
    timestamps: true,
    versionKey: false
});

const DeliveryModel = mongoose.model(
    'deliverys',
    DeliverySchema
);
module.exports = DeliveryModel