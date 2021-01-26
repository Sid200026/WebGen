const express = require('express');
const {
  createVerificationKeyController,
} = require('../../controller/createVerificationKey');
const {
  verifyVerificationKeyController,
} = require('../../controller/verifyVerificationKey');
const { submitLimiter } = require('../../controller/rateLimitSubmit');

const { createWebsite } = require('../../controller/createWebsite');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.route('/getkey').post(createVerificationKeyController);
router.route('/verifykey').post(verifyVerificationKeyController);

router.use('/submit', submitLimiter);
router.route('/submit').post(createWebsite);

module.exports = { router };
