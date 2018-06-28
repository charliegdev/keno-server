
const express = require('express');

const router = express.Router();

/* GET home page. */
router.post('/', ({ params }, res, next) => {
  console.log(params);
  res.send("Start game.");
});

module.exports = router;
