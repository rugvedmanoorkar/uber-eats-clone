const connectDB = require('../../config/db')
const db = require('../../config/db')


exports.getRestaurant =(req, res, next) => {
    res.send('GET USER DETAILS')
}

exports.addRestaurant =async (req, res, next) => {
    console.log(res.body)
    
    const {restaurantName, emailid, password, location } = req.body
    
    const sql = "INSERT INTO restaurants (restaurantName, emailid, password, location) values (?,?,?)"
    db.query(sql, [username , password, emailid], function(err, data, fields) {
        if (err){
            console.log(`Error: ${err}`.red.bold)
        }else{
        res.json({
          status: 200,
          message: "New Restaurant added successfully"
        })
    }
      })
    
    
    
}

exports.deleteRestaurant =(req, res, next) => {
    res.send('GET sUSER DETAILS')
}