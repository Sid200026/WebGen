const Queue = require('bull');
const { redisConfig } = require('../../constants/REDIS_Service');
const { EmailSendTextOnly } = require('../email/email');
const { VERIFICATION_EMAIL_MESSAGE } = require('../../constants/messages');

const sendMailQueue = new Queue('Mail', redisConfig);

sendMailQueue.process(async (job) => {
  const { email, key } = job.data;
  EmailSendTextOnly(
    email,
    'Webgen Verification Code',
    '',
    VERIFICATION_EMAIL_MESSAGE(key),
  );
});

module.exports = { sendMailQueue };
