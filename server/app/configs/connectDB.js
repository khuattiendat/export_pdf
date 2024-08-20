const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.DATABASE_URL;
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect to MongoDB successfully');
    } catch (error) {
        console.log('Connect to MongoDB failure');
    }
}
module.exports = connectDB;