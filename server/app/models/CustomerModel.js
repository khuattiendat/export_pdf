const mongoose = require('mongoose');
const CustomerSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    }


}, {
    timestamps: true
})
const CustomerModel = mongoose.model('Customer', CustomerSchema);
module.exports = CustomerModel;