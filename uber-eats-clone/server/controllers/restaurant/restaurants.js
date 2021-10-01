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