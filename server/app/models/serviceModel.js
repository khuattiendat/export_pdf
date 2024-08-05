const mongoose = require('mongoose');
const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
}, {
    timestamps: true
})
const Service = mongoose.model('Service', ServiceSchema);
module.exports = Service;