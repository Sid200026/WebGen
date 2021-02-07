const Queue = require('bull');
const { redisConfig } = require('../../constants/REDIS_Service');
const { developSite } = require('../createWebsite/index');

const createWebsiteQueue = new Queue('Create Website Service', redisConfig);

createWebsiteQueue.process(async (job) => {
  const {
    introduction,
    email,
    workExperience,
    aboutMe,
    project,
    achievement,
    contact,
  } = job.data;
  await developSite(
    { introduction, aboutMe, workExperience, project, achievement, contact },
    email,
  );
});

module.exports = { createWebsiteQueue };
