const fs = require('fs');
const path = require('path');
const {
  introductionInitial,
  aboutMeInitial,
} = require('../../constants/JavaScriptFile');

const introductionFileName = 'user.introduction_initial.js';
const aboutMeFileName = 'user.about_me_initial.js';
const rootDirectory = path.join(__dirname, '../../../frontend/src/initialState');

const createFiles = ({ introduction, aboutMe }) => {
  const dataIntroduction = new Uint8Array(
    Buffer.from(introductionInitial(introduction)),
  );
  const dataAboutMe = new Uint8Array(Buffer.from(aboutMeInitial(aboutMe)));

  const introductionPath = path.join(rootDirectory, introductionFileName);
  const aboutMePath = path.join(rootDirectory, aboutMeFileName);
  fs.writeFileSync(introductionPath, dataIntroduction);
  fs.writeFileSync(aboutMePath, dataAboutMe);
};

module.exports = { createFiles };
