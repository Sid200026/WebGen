const db = require('./database');
const { logger } = require('../logger/logger');
const createWebsiteInfoTable = `
CREATE TABLE IF NOT EXISTS website_info (
    coffee INT,
    line INT,
    built INT,
    visitor INT,
    id INT UNIQUE
);
`;

db.query(createWebsiteInfoTable, [], (err, res) => {
  if (err) {
    logger.error(err);
  }
});
