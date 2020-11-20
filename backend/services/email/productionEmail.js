const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');

const { logger } = require('../../logger/logger');

const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: dotenvfile });

const ACCESS_ID = process.env.AWS_ACCESS_KEY_ID;
const SECRET_ACCESS = process.env.AWS_SECRET_ACCESS_KEY;
const REGION = process.env.AWS_SES_REGION;
const EMAIL = process.env.AWS_REGISTERED_EMAIL;

const ses = new AWS.SES({
  accessKeyId: ACCESS_ID,
  secretAccessKey: SECRET_ACCESS,
  region: REGION,
  apiVersion: '2010-12-01',
});

const sendTextMail = async (to, subject, text = '', html = '') => {
  const transporter = nodemailer.createTransport({
    SES: ses,
  });
  const mailOptions = {
    from: EMAIL,
    subject,
    text,
    html,
    to,
  };
  const sentMessage = await transporter.sendMail(mailOptions);
  logger.info(`Text Mail || ${to} || ${sentMessage.messageId}`);
};

const sendAttachmentMail = async (
  to,
  subject,
  text = '',
  html = '',
  attachments = [],
) => {
  const transporter = nodemailer.createTransport({
    SES: ses,
  });
  const mailOptions = {
    from: EMAIL,
    subject,
    text,
    html,
    to,
    attachments,
  };
  const sentMessage = await transporter.sendMail(mailOptions);
  logger.info(`Attachment Mail || ${to} || ${sentMessage.messageId}`);
};

module.exports = { sendTextMail, sendAttachmentMail };
