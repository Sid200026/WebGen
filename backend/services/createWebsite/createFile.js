const fs = require('fs');
const path = require('path');
const {
  introductionInitial,
  aboutMeInitial,
  workExperienceInitial,
  projectInitial,
  achievementInitial,
  contactInitial,
} = require('../../constants/JavaScriptFile');

const introductionFileName = 'user.introduction_initial.js';
const aboutMeFileName = 'user.about_me_initial.js';
const workExperienceFileName = 'user.work_experience_initial.js';
const projectFileName = 'user.project_initial.js';
const achievementFileName = 'user.achievement_initial.js';
const contactFileName = 'user.contact_initial.js';
const rootDirectory = path.join(__dirname, '../../../frontend/initialState');

const createFiles = ({
  introduction,
  aboutMe,
  workExperience,
  project,
  achievement,
  contact,
}) => {
  const dataIntroduction = new Uint8Array(
    Buffer.from(introductionInitial(introduction)),
  );
  const dataAboutMe = new Uint8Array(Buffer.from(aboutMeInitial(aboutMe)));
  const dataWorkExperience = new Uint8Array(
    Buffer.from(workExperienceInitial(workExperience)),
  );

  const dataProject = new Uint8Array(Buffer.from(projectInitial(project)));
  const dataAchievement = new Uint8Array(Buffer.from(achievementInitial(achievement)));
  const dataContact = new Uint8Array(Buffer.from(contactInitial(contact)));

  const introductionPath = path.join(rootDirectory, introductionFileName);
  const aboutMePath = path.join(rootDirectory, aboutMeFileName);
  const workExperiencePath = path.join(rootDirectory, workExperienceFileName);
  const projectPath = path.join(rootDirectory, projectFileName);
  const achievementPath = path.join(rootDirectory, achievementFileName);
  const contactPath = path.join(rootDirectory, contactFileName);

  fs.writeFileSync(introductionPath, dataIntroduction);
  fs.writeFileSync(aboutMePath, dataAboutMe);
  fs.writeFileSync(workExperiencePath, dataWorkExperience);
  fs.writeFileSync(projectPath, dataProject);
  fs.writeFileSync(achievementPath, dataAchievement);
  fs.writeFileSync(contactPath, dataContact);
};

module.exports = { createFiles };
