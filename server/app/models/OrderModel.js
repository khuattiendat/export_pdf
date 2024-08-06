const mongoose = require('mongoose');
const OrderSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    numberSession: {
        type: Number,
        required: true
    },
    zoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zoom',
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    orderDetail: [
        {
            service: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Service',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
        }
    ],
    totalMoney: {
        type: Number,
        required: true
    },
    totalVat: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})
const OrderModel = mongoose.model('Order', OrderSchema);
module.exports = OrderModel;