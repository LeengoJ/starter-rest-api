//"user strict";

var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6526946",
  password: "Ku5weiQuCf",
  database: "sql6526946",
  port: 3306,
});
// connect to database
// connection.connect(function (err) {
//   if (err) throw err;
// });

module.exports = connection;
