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
    pricePerSession_weekday: { // Giá cho mỗi ca thuê ngay thuong
        type: Number,
        required: true
    },
    pricePerSession_weekend: { // Giá cho mỗi ca thuê cuoi tuan
        type: Number,
        required: true
    },
}, {
    timestamps: true
})
const ZoomModel = mongoose.model('Zoom', ZoomSchema);
module.exports = ZoomModel;