
const express = require('express');

const router = express.Router();

/* GET home page. */
router.post('/', ({ body }, res, next) => {
  console.log(body);
  const response = Object.assign({}, body, { won: 100 });
  res.send(response);
});

module.exports = router;
