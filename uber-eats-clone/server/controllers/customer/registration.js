const connectDB = require('../../config/db')
const db = require('../../config/db')


exports.getUser =(req, res, next) => {
    //res.send('GET USER DETAILS')

    const {username, password} = req.body
    const sql = "SELECT * FROM users where (username) = (?) and (password) = (?)" ;
    db.query(sql, [username, password], (err, row) => {
        if(err){
            console.log(`Error: ${err}`.red.bold)
        } else {
            res.json({
                status: 200,
                data: row,
                message: "New user added successfully"
            })
        }
    })
}

exports.addUser =async (req, res, next) => {
    console.log(res.body)
    
    const {username, password, emailid } = req.body
    
    const sql = "INSERT INTO users (username, password, emailid) values (?,?,?)"
    db.query(sql, [username , password, emailid], function(err, data, fields) {
        if (err){
            console.log(`Error: ${err}`.red.bold)
        }else{
        res.json({
          status: 200,//
          message: "New user added successfully"
        })
    }
      })
 }

exports.deleteUser =(req, res, next) => {
    res.send('DELETE sUSER DETAILS')
    const {username} = req.body
    const sql = "DELETE FROM users where (username) = (?)" ;
    db.query(sql, [username], (err, row) => {
        if(err){
            console.log(`Error: ${err}`.red.bold)
        } else {
            res.json({
                status: 200,
                data: row,
                message: "New user deleted successfully"
            })
        }
    })
}