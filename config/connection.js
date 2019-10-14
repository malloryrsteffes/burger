// Set up MySQL connection.
var mysql = require("mysql");

// //Read and set any environment variables with the dotenv package.
// require("dotenv").config();

var connection;

// if the server contains the JAWSDB_URL environmental variable (saved by Heroku), it connects
// // to the JawsDB database
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
// if the server lacks the variable, it falls back on the explicitly defined local db
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root1234",
    database: "burgers_db"
  });
};
console.log(connection);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;