const connectDB = require('../../config/db')
const db = require('../../config/db')


exports.getRestaurantsInCity =async (req, res, next) => {
    //res.send('GET RESTAURANT IN AREA')
    
    const {city} = req.query
    console.log(req.query)
    const sql = "SELECT * FROM restaurants where (city) = (?) " ;
    db.query(sql, [city], (err, row) => {
        if(err){
            console.log(`Error: ${err}`.red.bold)
        } else {
            res.json({
                status: 200,
                data: row,
                message: "Restaurants loaded successfully"
            })
        }
    })
}

exports.getRestaurantMenu =async (req, res, next) => {
    //res.send('GET RESTAURANT IN AREA')
   
    const id = req.params.id
    console.log(id, " This is id")
    const sql = "SELECT * FROM menu where (restaurant_id) = (?) " ;
    //const sql = "SELECT * FROM usersdb.menu where restaurant_id = 1" ;
    db.query(sql, [id], (err, row) => {
        if(err){
            console.log(`Error: ${err}`.red.bold)
        } else {
            console.log(res.data, " Data" )
            res.json({
                status: 200,
                data: row,
                message: "Menu loaded successfully"
            })
        }
    })
}