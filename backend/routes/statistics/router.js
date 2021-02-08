const express = require('express');
const { getWebsiteInfoController } = require('../../controller/getWebsiteInfo');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.route('/').get(getWebsiteInfoController);

module.exports = { router };
