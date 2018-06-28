
const express = require('express');

const router = express.Router();

/* GET home page. */
router.post('/', ({ body }, res, next) => {
  console.log(body);
  res.send("Start game.");
});

module.exports = router;
