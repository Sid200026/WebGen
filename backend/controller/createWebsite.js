const { createWebsiteQueue } = require('../services/background/createBackground');

const createWebsite = async (req, res) => {
  const { introduction, email, aboutMe } = req.body;
  res.sendStatus(200);
  const data = {
    introduction,
    aboutMe,
    email,
  };
  createWebsiteQueue.add(data);
};

module.exports = { createWebsite };
