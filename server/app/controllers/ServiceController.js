const {addService, getAllService, getServiceById, updateService, deleteService} = require('../services/Service');
const ServiceController = {
    addService: async (req, res) => {
        try {
            const service = await addService(req.body);
            if (service.error) {
                return res.status(400).json({
                    message: service.message,
                    error: true
                })
            }
            return res.status(201).json({
                message: service.message,
                data: service.data,
                error: false
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message || error,
                error: true
            })
        }

    },
    getAllService: async (req, res) => {
        try {
            const services = await getAllService();
            if (services.error) {
                return res.status(400).json({
                    message: services.message,
                    error: true
                })
            }
            return res.status(200).json({
                message: 'All services',
                data: services.data,
                error: false
            })

        } catch (error) {
            return res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    },
    getServiceById: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await getServiceById(id);
            if (service.error) {
                return res.status(400).json({
                    message: service.message,
                    error: true
                })
            }
            return res.status(200).json({
                message: 'Service found',
                data: service.data,
                error: false
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    },
    updateService: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await updateService(id, req.body);
            if (service.error) {
                return res.status(400).json({
                    message: service.message,
                    error: true
                })
            }
            return res.status(200).json({
                message: service.message,
                data: service.data,
                error: false
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    },
    deleteService: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await deleteService(id);
            if (service.error) {
                return res.status(400).json({
                    message: service.message,
                    error: true
                })
            }
            return res.status(200).json({
                message: service.message,
                error: false
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    }
}
module.exports = ServiceController;