const mongoose = require('mongoose');
const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
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
const ServiceModel = mongoose.model('Service', ServiceSchema);
module.exports = ServiceModel;