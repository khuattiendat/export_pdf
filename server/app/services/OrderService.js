const OrderModel = require('../models/OrderModel');
const addOrder = async (data, customerId) => {
    try {
        const generateCode = () => {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            return `DH${year}${month}${day}${hours}${minutes}${seconds}`;
        }
        const newOrder = await new OrderModel({
            code: generateCode(),
            customer: customerId,
            zoom: data.zoom,
            date: data.date,
            startTime: data.startTime,
            endTime: data.endTime,
            priceZoom: data.priceZoom,
            orderDetail: data.orderDetail,
            totalMoney: data.totalMoney,
            totalVat: data.totalVat,
            numberSession: data.numberSession
        })
        const orderSaved = await newOrder.save();
        return {
            data: orderSaved,
            error: false
        }
    } catch (error) {
        return {
            message: error.message || error,
            error: true
        }
    }
}
const getOrderByCustomerOrId = async (customerId) => {
    try {
        const orders = await OrderModel.find({
            $or: [
                {customer: customerId},
                {_id: customerId}
            ]
        })
            .populate('customer')
            .populate('zoom')
            .populate('orderDetail.service')
        return {
            data: orders,
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
    addOrder,
    getOrderByCustomerOrId
}