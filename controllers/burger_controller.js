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
    [req.body.name, 0],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", (res, req) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        return res.statusCode(404).end();
      }
      res.statusCode(200).end();
    }
  );
});

module.exports = router;
