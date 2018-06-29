
// import * as getResponseObject from "../keno-math/gameplay";
const express = require('express');
const getResponseObject = require("../keno-math/gameplay");

const router = express.Router();


/* GET home page. */
router.post('/', ({ body }, res, next) => {
  const { spots, wager } = body;

  const result = getResponseObject(spots, wager);
  res.send(result);
});

module.exports = router;
