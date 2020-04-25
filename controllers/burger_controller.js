const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [`'${req.body.burger_name}'`, false],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  burger.updateOne(id, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
