const { getTemplates } = require('../models/queries');

const getTemplateController = async (_req, res) => {
  const response = await getTemplates();
  res.status(200).send({
    message: `Templates received successfully`,
    data: response,
  });
};

module.exports = { getTemplateController };
