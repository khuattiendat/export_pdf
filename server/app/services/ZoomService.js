const ZoomModel = require('../models/ZoomModel');
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
const getZoomById = async (id) => {
    try {
        const zoom = await ZoomModel.findById(id);
        return {
            data: zoom,
            error: false
        }
    } catch (error) {
        return {
            message: error.message || error,
            error: true
        }
    }

}
const updateZoom = async (id, data) => {
    try {
        const zoom = await ZoomModel.findById(id);
        if (!zoom) {
            return {
                message: 'Zoom not found',
                error: true
            }
        }
        if (data.name) zoom.name = data.name;
        if (data.address) zoom.address = data.address;
        if (data.acreage) zoom.acreage = data.acreage;
        if (data.capacity) zoom.capacity = data.capacity;
        if (data.pricePerSession) zoom.pricePerSession = data.pricePerSession;
        const zoomUpdated = await zoom.save();
        return {
            data: zoomUpdated,
            error: false
        }
    } catch (error) {
        return {
            message: error.message || error,
            error: true
        }
    }

}
const deleteZoom = async (id) => {
    try {
        const zoom = await ZoomModel.findById(id);
        if (!zoom) {
            return {
                message: 'Zoom not found',
                error: true
            }
        }
        const zoomDeleted = await zoom.deleteOne();
        return {
            message: 'Zoom deleted successfully',
            data: zoomDeleted,
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
    getAllZoom,
    getZoomById,
    updateZoom,
    deleteZoom
}