'use strict';
const nodemailer = require('nodemailer');
// Use .env in development mode, .env.production in production mode
const { emailConfig } = require('../constants/EmailService');

const getTransporter = () => nodemailer.createTransport(emailConfig);

const sendTextMail = async (to, subject, text = '', html = '') => {
  const transporter = getTransporter();
  const sentMessage = await transporter.sendMail({
    from: emailConfig.auth.user,
    to: to,
    subject: subject,
    text: text,
    html: html,
  });
  console.log(sentMessage.messageId);
};

const sendAttachmentMail = async (
  to,
  subject,
  text = '',
  html = '',
  attachments = [],
) => {
  const transporter = getTransporter();
  const sentMessage = await transporter.sendMail({
    from: emailConfig.auth.user,
    to: to,
    subject: subject,
    text: text,
    html: html,
    attachments: attachments,
  });
  console.log(sentMessage.messageId);
};

module.exports = { sendTextMail, sendAttachmentMail };
