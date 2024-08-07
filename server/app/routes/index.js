const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const ZoomController = require('../controllers/ZoomController');
const ServiceController = require('../controllers/ServiceController');
router.get('/', (req, res) => {
    res.send('Hello World');
})
// order
router.post('/order', OrderController.addOrder)
router.get('/order/:id', OrderController.getOrderByCustomer)
// zoom
router.post('/zoom', ZoomController.addZoom)
router.get('/zoom', ZoomController.getAllZoom)
router.get('/zoom/:id', ZoomController.getZoomById)
router.put('/zoom/:id', ZoomController.updateZoom)
router.delete('/zoom/:id', ZoomController.deleteZoom)
//service
router.post('/service', ServiceController.addService)
router.get('/service', ServiceController.getAllService)
router.get('/service/:id', ServiceController.getServiceById)
router.put('/service/:id', ServiceController.updateService)
router.delete('/service/:id', ServiceController.deleteService)
module.exports = router;