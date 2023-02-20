var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bcd501d7fa1cba",
  password: "f0449516",
  // port: 8889,
  // database: process.env.NODE_ENV === 'test' ? 'test_database' : 'url_shortener'
  database: "heroku_34ac065506ec321"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Database is connected!");
});

// const db = new sqlite3.Database('./test.db', (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the test database.');
// });

module.exports = connection;