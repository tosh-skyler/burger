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
  updateOne(id, cb) {
    orm.updateOne("burgers", id, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
