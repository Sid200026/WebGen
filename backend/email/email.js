let EmailSendTextOnly, EmailSendAttachment;

if (process.env.NODE_ENV === 'production') {
} else {
  const { sendTextMail, sendAttachmentMail } = require('./developmentEmail');
  EmailSendTextOnly = sendTextMail;
  EmailSendAttachment = sendAttachmentMail;
}

module.exports = { EmailSendTextOnly, EmailSendAttachment };
