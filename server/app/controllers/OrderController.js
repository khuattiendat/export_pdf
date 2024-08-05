const {addCustomer} = require("../services/customerService");
const {addOrder, getOrderByCustomerOrId} = require("../services/OrderService");
const OrderController = {
    addOrder: async (req, res) => {
        try {
            const data = req.body;
            const customer = await addCustomer(data);
            if (customer.error) {
                return res.status(400).json({
                    message: customer.message,
                    error: true
                })
            }
            const customerId = customer.data._id;
            const order = await addOrder(data, customerId);
            if (order.error) {
                return res.status(400).json({
                    message: order.message,
                    error: true
                })
            }
            res.status(201).json({
                data: order.data,
                error: false
            })

        } catch (error) {
            res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    },
    getOrderByCustomer: async (req, res) => {
        try {
            const customerId = req.params.id;
            const orders = await getOrderByCustomerOrId(customerId);
            if (orders.error) {
                return res.status(400).json({
                    message: orders.message,
                    error: true
                })
            }
            res.status(200).json({
                data: orders.data,
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
module.exports = OrderController;