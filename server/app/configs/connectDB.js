const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.DATABASE_URL;
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000
        });
        console.log('Connect to MongoDB successful');
    } catch (error) {
        console.log('Connect to MongoDB failure');
    }
}
module.exports = connectDB;