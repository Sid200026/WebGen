let EmailSendTextOnly, EmailSendAttachment;

if (process.env.NODE_ENV === 'production') {
  const { sendTextMail, sendAttachmentMail } = require('./productionEmail');
  EmailSendTextOnly = sendTextMail;
  EmailSendAttachment = sendAttachmentMail;
} else {
  const { sendTextMail, sendAttachmentMail } = require('./developmentEmail');
  EmailSendTextOnly = sendTextMail;
  EmailSendAttachment = sendAttachmentMail;
}

module.exports = { EmailSendTextOnly, EmailSendAttachment };
