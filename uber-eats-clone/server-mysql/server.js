const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const dotenv = require('dotenv');
const colors = require('colors');
const bodyParser = require('body-parser');
const conn = require('./config/db')

dotenv.config({path: './config/config.env'})


//Routes
const registration = require ('./routes/customer/registration')
const restaurants = require('./routes/restaurant/restaurants')
const app = express();


app.use(cors())//
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

conn.connect();
console.log(`MySQL connected: `.cyan.underline.bold)


app.get('/', (req, res) => res.send('Hello'))


app.use('/api/v1/', registration)
app.use('/', restaurants)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servers started on  ${  process.env.NODE_ENV} server on port ${PORT}`.yellow.bold)
});