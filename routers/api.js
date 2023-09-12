const express = require("express");
const apikey = require("../controllers/apikey");

const router = express.Router();

router.post('/apikey',apikey);

module.exports = router;