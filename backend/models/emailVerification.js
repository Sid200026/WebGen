const db = require('./database');
const { logger } = require('../logger/logger');
const createEmailVerificationTable = `
CREATE TABLE IF NOT EXISTS email_verification (
    email VARCHAR(320) UNIQUE,
    verification_key VARCHAR(6) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

db.query(createEmailVerificationTable, [], (err, res) => {
  if (err) {
    logger.error(err);
  }
});
