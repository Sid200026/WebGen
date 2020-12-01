const db = require('./database');
const { generateKey } = require('../services/verificationKey/key');

const getVerificationKey = async (email) => {
  const selectQuery = `
    SELECT * from email_verification where email = $1 LIMIT 1;
    `;
  const { rows } = await db.query(selectQuery, [email]);
  if (!rows || rows.length === 0) {
    return [];
  } else {
    return rows[0];
  }
};

const createVerificationKey = async (email) => {
  const createQuery = `
  INSERT INTO email_verification (email, verification_key)
  VALUES($1, $2)
  ON CONFLICT(email)
  DO
  UPDATE SET verification_key=$2
  RETURNING *;
  `;
  const response = await db.query(createQuery, [email, generateKey()]);
  return response.rows[0];
};

const deleteVerificationKey = async (email) => {
  const deleteQuery = `
  DELETE FROM email_verification where email=$1
  `;
  await db.query(deleteQuery, [email]);
};

module.exports = { getVerificationKey, createVerificationKey, deleteVerificationKey };
