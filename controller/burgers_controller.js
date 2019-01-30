var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create the routes and associated logic
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  console.log("hi", req.body);
  burger.insertOne(["burger"], [req.body.burgername], function(data) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log(req.params.id);
  burger.updateOne(
    {
      devoured: true
    },
    condition,
    function(data) {
      res.redirect("/");
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
