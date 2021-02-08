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

const createTemplate = async (
  template_name,
  template_image,
  template_link,
  template_config,
) => {
  const createQuery = `
  INSERT INTO template (template_name, template_image, template_link, template_config)
  VALUES($1, $2, $3, $4)
  ON CONFLICT(template_name)
  DO
  UPDATE SET template_image=$2, template_link=$3, template_config=$4
  RETURNING *;
  `;
  const response = await db.query(createQuery, [
    template_name,
    template_image,
    template_link,
    template_config,
  ]);
  return response.rows[0];
};

const getTemplates = async () => {
  const selectQuery = `
    SELECT * from template;
    `;
  const { rows } = await db.query(selectQuery);
  return rows;
};

const addBuilt = async () => {
  const updateQuery = `
  UPDATE website_info
  SET built = built + 1
  WHERE id = 1
  `;
  await db.query(updateQuery);
};

const addVisitor = async () => {
  const updateQuery = `
  UPDATE website_info
  SET visitor = visitor + 1
  WHERE id = 1
  `;
  await db.query(updateQuery);
};

const addWebsiteInfo = async () => {
  const insertQuery = `
  INSERT INTO website_info (coffee, line, built, visitor, id)
  VALUES($1, $2, $3, $4, $5)
  ON CONFLICT(id)
  DO NOTHING;
  `;
  await db.query(insertQuery, [100, 20000, 0, 0, 1]);
};

const getWebsiteInfo = async () => {
  const selectQuery = `
    SELECT * from website_info LIMIT 1;
    `;
  const { rows } = await db.query(selectQuery);
  return rows;
};

module.exports = {
  getVerificationKey,
  createVerificationKey,
  deleteVerificationKey,
  createTemplate,
  getTemplates,
  addBuilt,
  addVisitor,
  addWebsiteInfo,
  getWebsiteInfo,
};
