const express = require("express");
const allData = require("../controllers/items");

const router = express.Router();

router.get("/",allData);

module.exports = router;