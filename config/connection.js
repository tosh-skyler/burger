const mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "burger_db"
});

connection.connect(function(err) {
	if (err) {
		console.error("ERROR CONNECTING:" + err.stack);
		return;
	}
	console.log("CONNECTED AS ID" + connection.threadId);
});

module.exports = connection;

