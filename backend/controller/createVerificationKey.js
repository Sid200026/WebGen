const validator = require('validator').default;
const { sendMailQueue } = require('../services/background/emailBackground');
const { EMAIL_QUEUE_TYPES } = require('../constants/REDIS_Service');
const { createVerificationKey } = require('../models/queries');
const { logger } = require('../logger/logger');

const createVerificationKeyController = async (req, res) => {
  const { email } = req.body;
  if (!email || !validator.isEmail(email)) {
    res.status(400).send({ error: 'Invalid Email Address', data: { email: email } });
  } else {
    const response = await createVerificationKey(email);
    const data = {
      email,
      key: response.verification_key,
      type: EMAIL_QUEUE_TYPES.VERIFICATION_KEY,
    };
    // Print to console in development
    if (process.env.NODE_ENV !== 'production') {
      logger.info(response.verification_key);
    }
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
