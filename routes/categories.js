const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all categories
router.get("/", (req, res) => {
  const query = "SELECT * FROM category";
  db.all(query, [], (err, rows) => {
    if (err) {
      res
        .status(500)
        .json({ error: "Database query failed", details: err.message });
    } else {
      res.status(200).json(rows);
    }
  });
});

module.exports = router;
