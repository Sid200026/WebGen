const { createWebsiteQueue } = require('../services/background/createBackground');

const createWebsite = async (req, res) => {
  const { introduction, email } = req.body;
  res.sendStatus(200);
  const data = {
    introduction,
    email,
  };
  createWebsiteQueue.add(data);
};

module.exports = { createWebsite };
