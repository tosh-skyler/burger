const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '101ruBBish10$',
    database: 'burger_db'
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("ERROR CONNECTING:" + err.stack);
    return;
  }
  console.log("CONNECTED AS ID" + connection.threadId);
});

module.exports = connection;
