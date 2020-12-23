const db = require('./database');
const { logger } = require('../logger/logger');
const createTemplateTable = `
CREATE TABLE IF NOT EXISTS template (
    template_name VARCHAR(320) UNIQUE,
    template_image VARCHAR(320) NOT NULL,
    template_link VARCHAR(320) NOT NULL,
    template_config json NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

db.query(createTemplateTable, [], (err, res) => {
  if (err) {
    logger.error(err);
  }
});
