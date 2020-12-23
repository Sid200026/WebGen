const themes = require('../constants/theme');
const { createTemplate } = require('../models/queries');

const allThemes = Object.values(themes);

allThemes.map(async (theme) => {
  await createTemplate(
    theme.template_name,
    theme.template_image,
    theme.template_link,
    theme.template_config,
  );
});
