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

const app = express();


app.use(cors())//
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

conn.connect();
console.log(`MySQL connected: `.cyan.underline.bold)
//Create connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'rugved123',
//     database: 'usersdb'
//   })

//  db.connect((err)=>{
//     if (err){
//         console.log(err)
//     }
//     else
//     console.log('mysql connected...')
    
//  }) 

app.get('/', (req, res) => res.send('Hello'))
// app.post("/", (req, res) => {
//     console.log(req.body)
//     const username = req.body.username;
//     const password = req.body.password;
//     const phonenumber = req.body.phonenumber
//     db.query(
//         "INSERT INTO users (username, password, phonenumber) values (?,?,?)",
//         [username,password,phonenumber],
//         (err, result) =>{
//             if (err) {
//                 console.log(err)
//             } else {
//                 res.send("Values Inserted");
//             }
//         })
//     }
// )

app.use('/api/v1/', registration)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servers started on  ${  process.env.NODE_ENV} server on port ${PORT}`.yellow.bold)
});