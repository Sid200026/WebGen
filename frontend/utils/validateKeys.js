import {
  greetingText,
  greetingColor,
  nameText,
  nameColor,
  nameBold,
  specialisationText,
  specialisationColor,
  particleTheme,
  particleThemeBackgroundColor,
  particleThemeEntityColor,
  buttonText,
  buttonBorder,
  buttonColor,
  buttonHoverBG,
  buttonHoverColor,
  font,
  metadesc,
  title,
  favicon,
  enable as IntroEnable,
  hoverEffect,
} from '../constants/introduction_page';

import {
  enable as AboutMeEnable,
  profile,
  description,
  descriptionColor,
  skills,
  background as AboutMeBackground,
  menuColor,
  menuBackground,
  resumeURL,
  resumeButtonText,
  resumeButtonBorder,
  resumeButtonColor,
  resumeButtonHoverBG,
  resumeButtonHoverColor,
  resumeButtonBG,
  resumeHoverEnable,
  skillsBackground,
  pageHeadline as AboutMePageHeadline,
  pageHeadlineColor as AboutMePageHeadlineColor,
  mediaHandles,
} from '../constants/about_me_page';

import {
  enable as WorkEnable,
  pageHeadline as WorkPageHeadline,
  pageHeadlineColor as WorkPageHeadlineColor,
  background as WorkBackground,
  workExperienceList,
} from '../constants/work_experience_page';

import {
  skillColor as defaultSkillColor,
  informationColor as defaultInformationColor,
  subTextColor as defaultSubTextColor,
  companyNameColor as defaultCompanyNameColor,
} from '../constants/default_theme';

import {
  enable as ProjectEnable,
  pageHeadline as ProjectPageHeadline,
  pageHeadlineColor as ProjectPageHeadlineColor,
  background as ProjectBackground,
  projectCardColor,
  projectDescriptionColor,
  projectTitleColor,
  projectViewBtnBorder,
  projectViewBtnColor,
  projectTableBg,
  projectTableColor,
  popularProject,
  otherProject,
} from '../constants/project_page';

import {
  enable as AchievementEnable,
  pageHeadline as AchievementPageHeadline,
  pageHeadlineColor as AchievementPageHeadlineColor,
  background as AchievementBackground,
  achievementCardColor,
  achievementDescriptionColor,
  achievementTitleColor,
  achievementViewBtnBorder,
  achievementViewBtnColor,
  achievements,
} from '../constants/achievements_page';

import {
  enable as ContactEnable,
  pageHeadline as ContactPageHeadline,
  pageHeadlineColor as ContactPageHeadlineColor,
  background as ContactBackground,
  footerColor,
  footerText,
  footerBorder,
  footerBackground,
  formBackground,
  formColor,
  formSpreeLink,
} from '../constants/contact_page';

const isArray = (a) => {
  return !!a && a.constructor === Array;
};

const isObject = (a) => {
  return !!a && a.constructor === Object;
};

const introductionKeySet = {
  [greetingText]: 'string',
  [greetingColor]: 'string',
  [nameText]: 'string',
  [nameColor]: 'string',
  [nameBold]: 'boolean',
  // eslint-disable-next-line max-len
  //   https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array
  [specialisationText]: isArray,
  [specialisationColor]: 'string',
  [particleTheme]: 'string',
  [particleThemeBackgroundColor]: 'string',
  [particleThemeEntityColor]: 'string',
  [buttonText]: 'string',
  [buttonBorder]: 'string',
  [buttonColor]: 'string',
  [buttonHoverBG]: 'string',
  [buttonHoverColor]: 'string',
  [font]: 'string',
  [metadesc]: 'string',
  [title]: 'string',
  [favicon]: isObject,
  [IntroEnable]: 'boolean',
  [hoverEffect]: 'boolean',
};

const aboutMeKeySet = {
  [AboutMeEnable]: 'boolean',
  [AboutMePageHeadline]: 'string',
  [AboutMePageHeadlineColor]: 'string',
  [profile]: isObject,
  [description]: 'string',
  [descriptionColor]: 'string',
  [skills]: isArray,
  [skillsBackground]: 'string',
  [AboutMeBackground]: 'string',
  [menuBackground]: 'string',
  [menuColor]: 'string',
  [resumeURL]: 'string',
  [resumeButtonText]: 'string',
  [resumeButtonBorder]: 'string',
  [resumeButtonColor]: 'string',
  [resumeButtonHoverBG]: 'string',
  [resumeButtonHoverColor]: 'string',
  [resumeButtonBG]: 'string',
  [resumeHoverEnable]: 'boolean',
  [mediaHandles]: isArray,
};

const workExperienceKeySet = {
  [WorkEnable]: 'boolean',
  [WorkPageHeadline]: 'string',
  [WorkPageHeadlineColor]: 'string',
  [WorkBackground]: 'string',
  [workExperienceList]: isArray,
};

const defaultThemeKeySet = {
  [defaultSkillColor]: 'string',
  [defaultCompanyNameColor]: 'string',
  [defaultInformationColor]: 'string',
  [defaultSubTextColor]: 'string',
};

const projectKeySet = {
  [ProjectEnable]: 'boolean',
  [ProjectPageHeadline]: 'string',
  [ProjectPageHeadlineColor]: 'string',
  [ProjectBackground]: 'string',
  [projectCardColor]: 'string',
  [projectDescriptionColor]: 'string',
  [projectTitleColor]: 'string',
  [projectViewBtnBorder]: 'string',
  [projectViewBtnColor]: 'string',
  [projectTableColor]: 'string',
  [projectTableBg]: 'string',
  [popularProject]: isArray,
  [otherProject]: isArray,
};

const achievementKeySet = {
  [AchievementEnable]: 'boolean',
  [AchievementPageHeadline]: 'string',
  [AchievementPageHeadlineColor]: 'string',
  [AchievementBackground]: 'string',
  [achievementCardColor]: 'string',
  [achievementDescriptionColor]: 'string',
  [achievementTitleColor]: 'string',
  [achievementViewBtnBorder]: 'string',
  [achievementViewBtnColor]: 'string',
  [achievements]: isArray,
};

const contactKeySet = {
  [ContactEnable]: 'boolean',
  [ContactPageHeadline]: 'string',
  [ContactPageHeadlineColor]: 'string',
  [ContactBackground]: 'string',
  [footerColor]: 'string',
  [footerText]: 'string',
  [footerBorder]: 'string',
  [footerBackground]: 'string',
  [formBackground]: 'string',
  [formColor]: 'string',
  [formSpreeLink]: 'string',
};

const validate = (data, parentObject, key) => {
  if (!Object.prototype.hasOwnProperty.call(data, key)) return false;
  const value = parentObject[key];
  if (typeof value === 'function') {
    return value(data[key]);
  }
  // eslint-disable-next-line valid-typeof
  return typeof data[key] === value;
};

const validateUploadedData = (data) => {
  const {
    introduction,
    aboutMe,
    workExperience,
    defaultTheme,
    project,
    achievement,
    contact,
  } = data;
  if (
    !introduction ||
    !aboutMe ||
    !workExperience ||
    !project ||
    !achievement ||
    !contact
  )
    return false;
  const introductionReturn = Object.keys(introductionKeySet).filter((key) => {
    return !validate(introduction, introductionKeySet, key);
  });
  if (introductionReturn.length !== 0) return false;

  const aboutMeReturn = Object.keys(aboutMeKeySet).filter((key) => {
    return !validate(aboutMe, aboutMeKeySet, key);
  });
  if (aboutMeReturn.length !== 0) return false;

  const workExperienceReturn = Object.keys(workExperienceKeySet).filter((key) => {
    return !validate(workExperience, workExperienceKeySet, key);
  });
  if (workExperienceReturn.length !== 0) return false;

  const defaultThemeReturn = Object.keys(defaultThemeKeySet).filter((key) => {
    return !validate(defaultTheme, defaultThemeKeySet, key);
  });
  if (defaultThemeReturn.length !== 0) return false;

  const projectReturn = Object.keys(project).filter((key) => {
    return !validate(project, projectKeySet, key);
  });
  if (projectReturn.length !== 0) return false;

  const achievementReturn = Object.keys(achievement).filter((key) => {
    return !validate(achievement, achievementKeySet, key);
  });
  if (achievementReturn.length !== 0) return false;

  const contactReturn = Object.keys(contact).filter((key) => {
    return !validate(contact, contactKeySet, key);
  });
  if (contactReturn.length !== 0) return false;

  return true;
};

export { validateUploadedData };
