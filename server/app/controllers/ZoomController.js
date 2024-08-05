const {addZoom, getAllZoom} = require('../services/ZoomService');
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
    }
}
module.exports = ZoomController;