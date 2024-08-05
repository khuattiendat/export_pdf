const ServiceModel = require('../models/serviceModel');
const addService = async (service) => {
    try {
        if (!service.name) return {message: 'Service name is required', error: true}
        if (!service.price) return {message: 'Service price is required', error: true}
        if (!service.unit) return {message: 'Service unit is required', error: true}
        const newService = await new ServiceModel({
            name: service.name,
            description: service.description,
            unit: service.unit,
            price: service.price,
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
module.exports = {
    addService,
    getAllService
}