const fs = require('fs');
const path = require('path');
const { introductionInitial } = require('../../constants/JavaScriptFile');

const introductionFileName = 'user.introduction_initial.js';
const rootDirectory = path.join(__dirname, '../../../frontend/src/initialState');

const createFiles = ({ introduction }) => {
  const dataIntroduction = new Uint8Array(
    Buffer.from(introductionInitial(introduction)),
  );

  const introductionPath = path.join(rootDirectory, introductionFileName);
  fs.writeFileSync(introductionPath, dataIntroduction);
};

module.exports = { createFiles };
