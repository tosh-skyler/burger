var connection = require("../config/connection.js");

const orm = {
  selectAll(tableName, cb) {
    queryString = `select * from ${tableName};`;
    connection.query(queryString, (err, res) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne(tableName, col, val, cb) {
    queryString = `insert into ${tableName} (${col}) values (?);`;

    console.log(queryString);

    connection.query(queryString, (err, res) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne(tableName, colAndVal, cb) {
    queryString = `update ${tableName} set ${colAndVal};`;

    console.log(queryString);

    connection.query(queryString, (err, res) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
