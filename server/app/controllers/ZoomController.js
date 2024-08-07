const {addZoom, getAllZoom, getZoomById, updateZoom, deleteZoom} = require('../services/ZoomService');
const ZoomController = {
    addZoom: async (req, res) => {
        try {
            const data = req.body;
            const zoom = await addZoom(data);
            if (zoom.error) {
                return res.status(400).json({
                    message: zoom.message,
                    error: true
                })
            }
            res.status(201).json({
                data: zoom.data,
                error: false
            })
        } catch (error) {
            res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    },
    getAllZoom: async (req, res) => {
        try {
            const zooms = await getAllZoom();
            if (zooms.error) {
                return res.status(400).json({
                    message: zooms.message,
                    error: true
                })
            }
            res.status(200).json({
                data: zooms.data,
                error: false
            })
        } catch (error) {
            res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    },
    getZoomById: async (req, res) => {
        try {
            const id = req.params.id;
            const zoom = await getZoomById(id);
            if (zoom.error) {
                return res.status(400).json({
                    message: zoom.message,
                    error: true
                })
            }
            res.status(200).json({
                data: zoom.data,
                error: false
            })
        } catch (error) {
            res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    },
    updateZoom: async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            const zoom = await updateZoom(id, data);
            if (zoom.error) {
                return res.status(400).json({
                    message: zoom.message,
                    error: true
                })
            }
            res.status(200).json({
                data: zoom.data,
                error: false
            })
        } catch (error) {
            res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    },
    deleteZoom: async (req, res) => {
        try {
            const id = req.params.id;
            const zoom = await deleteZoom(id);
            if (zoom.error) {
                return res.status(400).json({
                    message: zoom.message,
                    error: true
                })
            }
            res.status(200).json({
                message: zoom.message,
                error: false
            })
        } catch (error) {
            res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    }
}
module.exports = ZoomController;