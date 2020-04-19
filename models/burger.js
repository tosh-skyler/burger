const orm = require("../config/orm.js");

const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne(col, val, cb) {
    orm.insertOne("burgers", col, val, (res) => {
      cb(res);
    });
  },
  updateOne(colAndVal, cb) {
    orm.updateOne("burgers", colAndVal, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
