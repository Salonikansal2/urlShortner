const express = require('express');

const {generateNewShortUrl} = require("../controllers/url");

const router = express.Router();


router.post("/",generateNewShortUrl);

module.exports = router;




















