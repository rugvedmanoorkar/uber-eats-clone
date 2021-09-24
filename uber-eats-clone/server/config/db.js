const mysql = require('mysql2');



// const connectDB = async () => {
    // try{

        const conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'rugved123',
            database: 'usersdb'
          })

          
            
          
         

    // } catch(err) {
    //     console.log(`Error: ${err.message}.red`);
    //     process.exit(1)
    // }
//}

module.exports = conn