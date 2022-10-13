//"user strict";

var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6525333",
  password: "y2b22NzkHd",
  database: "sql6525333",
  port: 3306,
});
// connect to database
// connection.connect(function (err) {
//   if (err) throw err;
// });

module.exports = connection;
