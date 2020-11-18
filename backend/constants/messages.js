const VERIFICATION_EMAIL_MESSAGE = (key) =>
  `
<h4>Greetings from Team Webgen,</h4>
<p>Your Webgen verification code is</p>
<h1>${key}</h1>
`;

const ERROR_EMAIL_MESSAGE = () =>
  `
<h4>Greetings from Team Webgen,</h4>
<p>We're sorry to inform you that due to some issue on our end, we are unable to provide you with the website you built. Currently our developers are looking into the issue to fix it as soon as possible. You may send an email to <b>siddharthsingharoy@gmail.com</b> for any query.
<br>
<p>Any inconvenience is highly regretted.</p>
`;

const WEBSITE_EMAIL_MESSAGE = () =>
  `
<h4>Greetings from Team Webgen,</h4>
<p>Please find your website attached with this email.</p>
<br>
<p>Thank you for using our services and we hope you are satisfied with it. For any suggestions, feedback or queries, feel free to send an email to <b>siddharthsingharoy@gmail.com</b>.</p>
`;

module.exports = {
  VERIFICATION_EMAIL_MESSAGE,
  ERROR_EMAIL_MESSAGE,
  WEBSITE_EMAIL_MESSAGE,
};
