const express = require('express');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.route('/').get((req, res) => {
  res.json({ error: 'message' });
});

module.exports = { router };
