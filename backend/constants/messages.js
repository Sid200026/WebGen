const VERIFICATION_EMAIL_MESSAGE = (key) =>
  `
    <h4>Greetings from Team Webgen,</h4>
    <p>Your Webgen verification code is</p>
    <h1>${key}</h1>
`;

module.exports = { VERIFICATION_EMAIL_MESSAGE };
