const CustomerModel = require('../models/customerModel');
const addCustomer = async (customer) => {
    try {
        const generateCode = () => {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            return `KH${year}${month}${day}${hours}${minutes}${seconds}`;
        }
        const newCustomer = await new CustomerModel({
            code: generateCode(),
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
        })
        const customerSaved = await newCustomer.save();
        return {
            data: customerSaved,
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
    addCustomer
}