const express = require('express');
const path = require('path');

const { frontendLogger } = require('../../logger/logger');

const router = express.Router();

/************************** Logging errors from React ************************* */

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.route('/').post((req, res) => {
  const message = req.body.message;
  frontendLogger.error(message);
  res.status(201).end();
});

module.exports = { router };
