const ZoomModel = require('../models/Zoom');
const addZoom = async (data) => {
    try {
        if (!data.name || !data.address || !data.acreage || !data.capacity || !data.pricePerSession) {
            return {
                message: 'Missing required fields',
                error: true
            }
        }
        const newZoom = await new ZoomModel({
            name: data.name,
            address: data.address,
            acreage: data.acreage,
            capacity: data.capacity,
            pricePerSession: data.pricePerSession
        })
        const zoomSaved = await newZoom.save();
        return {
            data: zoomSaved,
            error: false
        }


    } catch (error) {
        return {
            message: error.message || error,
            error: true
        }
    }

}
const getAllZoom = async () => {
    try {
        const zooms = await ZoomModel.find();
        return {
            data: zooms,
            error: false
        }
    } catch (error) {
        return {
            message: error.message || error,
            error: true
        }
    }
}
module.exports = {
    addZoom,
    getAllZoom
}