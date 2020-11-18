const Queue = require('bull');
const { redisConfig, EMAIL_QUEUE_TYPES } = require('../../constants/REDIS_Service');
const { EmailSendTextOnly, EmailSendAttachment } = require('../email/email');
const {
  VERIFICATION_EMAIL_MESSAGE,
  ERROR_EMAIL_MESSAGE,
  WEBSITE_EMAIL_MESSAGE,
} = require('../../constants/messages');
const { cleanUp } = require('../createWebsite/cleanUp');

const sendMailQueue = new Queue('Mail Service', redisConfig);

sendMailQueue.process(async (job) => {
  const { type, email } = job.data;
  if (type === EMAIL_QUEUE_TYPES.VERIFICATION_KEY) {
    const { key } = job.data;
    await EmailSendTextOnly(
      email,
      'Webgen Verification Code',
      '',
      VERIFICATION_EMAIL_MESSAGE(key),
    );
  } else if (type === EMAIL_QUEUE_TYPES.FAILURE_EMAIL) {
    await EmailSendTextOnly(email, 'WebGen Services', '', ERROR_EMAIL_MESSAGE());
  } else if (type === EMAIL_QUEUE_TYPES.SUCCESS_EMAIL) {
    const { attachment } = job.data;
    await EmailSendAttachment(
      email,
      'WebGen Website',
      '',
      WEBSITE_EMAIL_MESSAGE(),
      attachment,
    );
    cleanUp();
  }
});

module.exports = { sendMailQueue };
