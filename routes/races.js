
import * as getResponseObject from "../keno-math/gameplay";

const express = require('express');

const router = express.Router();


/* GET home page. */
router.post('/', ({ body }, res, next) => {
  const { spots, wager } = body;

  const result = getResponseObject(spots, wager);

  const response = Object.assign({}, body, result);

  res.send(response);
});

module.exports = router;
