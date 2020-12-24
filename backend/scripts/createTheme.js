const themes = require('../constants/theme');
const { createTemplate } = require('../models/queries');

const createTheme = () => {
  const allThemes = Object.values(themes);

  allThemes.map(async (theme) => {
    await createTemplate(
      theme.template_name,
      theme.template_image,
      theme.template_link,
      theme.template_config,
    );
  });
};

module.exports = { createTheme };
