const { developSite } = require('../services/createWebsite/index');

const createWebsite = async (req, res) => {
  const { introduction, email } = req.body;
  res.sendStatus(200);
  await developSite({ introduction }, email);
};

module.exports = { createWebsite };
