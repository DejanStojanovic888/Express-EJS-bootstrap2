const express = require("express");
const fs = require("fs");
const router = express.Router(); //constructor function. pozovemo da dobijemo object

router.get("/", (req, res) => {
  fs.readFile("./data.json", "utf-8", (error, file) => {
    res.render("index", { accounts: JSON.parse(file) });
  });
});

module.exports = router;
