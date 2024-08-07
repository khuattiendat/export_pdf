const ServiceModel = require('../models/ServiceModel');
const addService = async (service) => {
    try {
        if (!service.name) return {message: 'Service name is required', error: true}
        if (!service.unit) return {message: 'Service unit is required', error: true}
        const newService = await new ServiceModel({
            name: service.name,
            description: service.description,
            unit: service.unit,
        })
        const saveService = await newService.save();
        return {
            message: 'Service added successfully',
            data: saveService,
            error: false
        }
    } catch (error) {
        return {
            message: error.message || error,
            error: true
        }
    }

}
const getAllService = async () => {
    try {
        const services = await ServiceModel.find();
        return {
            data: services,
            error: false
        }
    } catch (error) {
        return {
            message: error.message || error,
            error: true
        }
    }
}
const getServiceById = async (id) => {
    try {
        const service = await ServiceModel.findById(id);
        return {
            data: service,
            error: false
        }
    } catch (error) {
        return {
            message: error.message || error,
            error: true
        }
    }
}
const updateService = async (id, data) => {
    try {
        const service = await ServiceModel.findById(id);
        if (!service) return {message: 'Service not found', error: true}
        if (data.name) service.name = data.name;
        service.description = data.description;
        if (data.unit) service.unit = data.unit;
        const saveService = await service.save();
        return {
            message: 'Service updated successfully',
            data: saveService,
            error: false
        }
    } catch (error) {
        return {
            message: error.message || error,
            error: true
        }
    }
}
const deleteService = async (id) => {
    try {
        const service = await ServiceModel.findById(id);
        if (!service) return {message: 'Service not found', error: true}
        const deleteService = await service.deleteOne();
        return {
            message: 'Service deleted successfully',
            data: deleteService,
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
    addService,
    getAllService,
    getServiceById,
    updateService,
    deleteService
}