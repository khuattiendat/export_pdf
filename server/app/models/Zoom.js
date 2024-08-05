const mongoose = require('mongoose');
const ZoomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    acreage: { // Diện tích
        type: String,
        required: true
    },
    capacity: { // Sức chứa
        type: String,
        required: true
    },
    pricePerSession: { // Giá cho mỗi ca thuê
        type: Number,
        required: true
    },
}, {
    timestamps: true
})
const Zoom = mongoose.model('Zoom', ZoomSchema);
module.exports = Zoom;