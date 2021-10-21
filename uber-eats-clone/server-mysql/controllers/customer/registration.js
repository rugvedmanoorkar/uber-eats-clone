const connectDB = require("../../config/db");
const db = require("../../config/db");

//Get user creds from server
exports.getUser = async (req, res, next) => {
  
  let { username, password } = req.query;
  
  const sql = "SELECT * FROM users where (username) = (?) and (password) = (?)";
  db.query(sql, [username, password], (err, row) => {
    if (err) {
      console.log(`Error: ${err}`.red.bold);
      res.json({
        status: 500,
        data: err,
        success: false,
        message: "Server Error",
      });
    } else {
      console.log(row, " Row");
      if (row.length > 0) {
        res.json({
          status: 200,
          data: row,
          message: "User Found and logging in",
        });
      } else {
        res.json({
          status: 404,
          data: row,
          message: "User or Password is incorrect",
        });
      }
    }
  });
};

//Add a user to database

exports.addUser = async (req, res, next) => {
  try {
    const {
      fullname,
      username,
      password,
      emailid,
      dateofbirth,
      city,
      state,
      pin,
      country,
      nickname,
      about,
    } = req.body;
    const sql =
      "INSERT INTO users (fullname, username, password, emailid, dateofbirth, city, state, country, pin, about, nickname) values (?,?,?,?,?,?,?,?,?,?,?)";
    db.query(
      sql,
      [
        fullname,
        username,
        password,
        emailid,
        dateofbirth,
        city,
        state,
        country,
        pin,
        nickname,
        about,
      ],
      function (err, data, fields) {
        if (err) {
          console.log(`Error: ${err}`.red.bold);
          if (err.code == 1062) {
            res.json({
              status: 400,
              data: err,
              success: false,
              message: "Username Password already exist",
            });
          } else {
            res.json({
              status: 500,
              data: err,
              success: false,
              message: "Server Error",
            });
          }
        } else {
          res.json({
            status: 201, //
            data: data,
            message: "New user added successfully",
          });
        }
      }
    );
  } catch (err) {
    res.json({
      status: 400,
      data: data,
      success: false,
    });
    db.end();
  }
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.body;
  const sql = "DELETE FROM users where (id) = (?)";
  db.query(sql, [id], (err, row) => {
    if (err) {
      console.log(`Error: ${err}`.red.bold);
      res.json({
        status: 500,
        data: err,
        success: false,
        message: "Server Error",
      });
    } else {
      res.json({
        status: 200,
        data: row,
        message: "New user deleted successfully",
      });
    }
  });
};
