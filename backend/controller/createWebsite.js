const { createWebsiteQueue } = require('../services/background/createBackground');

const createWebsite = async (req, res) => {
  const {
    introduction,
    email,
    aboutMe,
    workExperience,
    project,
    achievement,
    contact,
  } = req.body;
  res.sendStatus(200);
  const data = {
    introduction,
    aboutMe,
    workExperience,
    email,
    project,
    achievement,
    contact,
  };
  createWebsiteQueue.add(data);
};

module.exports = { createWebsite };
