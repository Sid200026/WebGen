const express = require('express');
const {
  createVerificationKeyController,
} = require('../../controller/createVerificationKey');
const {
  verifyVerificationKeyController,
} = require('../../controller/verifyVerificationKey');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.route('/getkey').post(createVerificationKeyController);
router.route('/verifykey').post(verifyVerificationKeyController);

module.exports = { router };
