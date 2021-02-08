const { getWebsiteInfo } = require('../models/queries');

const getWebsiteInfoController = async (_req, res) => {
  const response = await getWebsiteInfo();
  res.status(200).send({
    data: response,
  });
};

module.exports = { getWebsiteInfoController };
