const connectDB = require('../config/db')
const db = require('../config/db')


exports.getUser =(req, res, next) => {
    res.send('GET USER DETAILS')
}

exports.addUser =async (req, res, next) => {
    console.log(res.body)
    
    const {username, password, phonenumber } = req.body
    
    const sql = "INSERT INTO users (username, password, phonenumber) values (?,?,?)"
    db.query(sql, [username , password, phonenumber], function(err, data, fields) {
        if (err){
            console.log(`Error: ${err}`.red.bold)
        }else{
        res.json({
          status: 200,
          message: "New user added successfully"
        })
    }
      })
    
    
    
}

exports.deleteUser =(req, res, next) => {
    res.send('GET sUSER DETAILS')
}