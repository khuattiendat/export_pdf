const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const router = require('./app/routes');
const connectDB = require('./app/configs/connectDB');

//use
app.use(morgan('combined'));
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

//router
app.use('/api', router);
// connect db
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})

