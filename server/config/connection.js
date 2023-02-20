var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 8889,
  database: 'url_shortener'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Database is connected!");
});

module.exports = connection;