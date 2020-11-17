const validator = require('validator').default;
const { sendMailQueue } = require('../services/background/background');
const { createVerificationKey } = require('../models/queries');

const createVerificationKeyController = async (req, res) => {
  const { email } = req.body;
  if (!email || !validator.isEmail(email)) {
    res.status(400).send({ error: 'Invalid Email Address', data: { email: email } });
  } else {
    const response = await createVerificationKey(email);
    const data = {
      email,
      key: response.verification_key,
    };
    const options = {
      attempts: 2,
    };
    sendMailQueue.add(data, options);
    res.status(200).send({
      message: `Verification key sent to ${email}`,
      data: {
        email: response.email,
        timestamp: response.timestamp,
      },
    });
  }
};

module.exports = { createVerificationKeyController };
