const { getVerificationKey, deleteVerificationKey } = require('../models/queries');
const validator = require('validator').default;

const verifyVerificationKeyController = async (req, res) => {
  const { email, key } = req.body;
  if (
    !key ||
    !validator.isLength(key, { min: 6, max: 6 }) ||
    !validator.isAlphanumeric(key)
  ) {
    res
      .status(400)
      .send({ error: 'Verification Key not valid', data: { email: email, key: key } });
    return;
  }
  if (!email || !validator.isEmail(email)) {
    res
      .status(400)
      .send({ error: 'Invalid Email Address', data: { email: email, key: key } });
  } else {
    const response = await getVerificationKey(email);
    if (response.length === 0) {
      res.status(400).send({
        error: 'Verification Key not valid',
        data: { email: email, key: key },
      });
      return;
    }
    const { verification_key } = response;
    if (verification_key === key) {
      await deleteVerificationKey(email);
      res.status(200).send({
        message: `Verification complete`,
        data: {
          email: response.email,
          timestamp: response.timestamp,
        },
      });
    } else {
      res.status(400).send({
        error: 'Verification Key not valid',
        data: { email: email, key: key },
      });
    }
  }
};

module.exports = { verifyVerificationKeyController };
