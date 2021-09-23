const db = require('../config/db')

exports.getUser =(req, res, next) => {
    res.send('GET USER DETAILS')
}

exports.addUser =async (req, res, next) => {
    res.json(req.body);
    
    const {username, password, phonenumber } = req.body
    
    const sql = "INSERT INTO users (username, password, phonenumber) values (?,?,?)"
    const user =  await db.query(sql,[username, password, phonenumber],
        (err, result) =>{
            if (err) {
                console.log(err)
            } else {
                return res.send(201).json({
                    success: true,
                    data: username + "account is created"
                })
            }
        }
        
        )
    
    
}

exports.deleteUser =(req, res, next) => {
    res.send('GET sUSER DETAILS')
}