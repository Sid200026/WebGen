const express = require('express');
const { getTemplateController } = require('../../controller/getTemplates');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.route('/gettemplates').get(getTemplateController);

module.exports = { router };
