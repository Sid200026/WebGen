const Queue = require('bull');
const { redisConfig } = require('../../constants/REDIS_Service');
const { developSite } = require('../createWebsite/index');

const createWebsiteQueue = new Queue('Create Website Service', redisConfig);

createWebsiteQueue.process(async (job) => {
  const { introduction, email } = job.data;
  await developSite({ introduction }, email);
});

module.exports = { createWebsiteQueue };
