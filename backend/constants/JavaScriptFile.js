const introductionInitial = ({
  enable,
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
  hoverEffect,
  favicon,
}) => `\
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
  enable,
  hoverEffect,
  favicon,
} from '../constants/introduction_page';

const introduction = {
  [enable]: ${enable},
  [greetingText]: \`${greetingText}\`,
  [greetingColor]: \`${greetingColor}\`,
  [nameText]: \`${nameText}\`,
  [nameColor]: \`${nameColor}\`,
  [nameBold]: ${nameBold},
  [specialisationText]: ${JSON.stringify(specialisationText)},
  [specialisationColor]: \`${specialisationColor}\`,
  [particleTheme]: \`${particleTheme}\`,
  [particleThemeBackgroundColor]: \`${particleThemeBackgroundColor}\`,
  [particleThemeEntityColor]: \`${particleThemeEntityColor}\`,
  [buttonText]: \`${buttonText}\`,
  [buttonBorder]: \`${buttonBorder}\`,
  [buttonColor]: \`${buttonColor}\`,
  [buttonHoverBG]: \`${buttonHoverBG}\`,
  [buttonHoverColor]: \`${buttonHoverColor}\`,
  [font]: \`${font}\`,
  [metadesc]: \`${metadesc}\`,
  [title]: \`${title}\`,
  [hoverEffect]: ${hoverEffect},
  [favicon]: ${JSON.stringify(favicon)},
};

export default introduction;
`;

const aboutMeInitial = ({
  enable,
  profile,
  description,
  descriptionColor,
  skills,
  background,
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
  pageHeadline,
  pageHeadlineColor,
  mediaHandles,
}) => `\
import {
  enable,
  profile,
  description,
  descriptionColor,
  skills,
  background,
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
  pageHeadline,
  pageHeadlineColor,
  mediaHandles,
} from '../constants/about_me_page';

const aboutMe = {
  [enable]: ${enable},
  [pageHeadline]: \`${pageHeadline}\`,
  [pageHeadlineColor]: \`${pageHeadlineColor}\`,
  [profile]: ${JSON.stringify(profile)},
  [description]: \`${description}\`,
  [descriptionColor]: \`${descriptionColor}\`,
  [skills]: ${JSON.stringify(skills)},
  [skillsBackground]: \`${skillsBackground}\`,
  [background]: \`${background}\`,
  [menuBackground]: \`${menuBackground}\`,
  [menuColor]: \`${menuColor}\`,
  [resumeURL]: \`${resumeURL}\`,
  [resumeButtonText]: \`${resumeButtonText}\`,
  [resumeButtonBorder]: \`${resumeButtonBorder}\`,
  [resumeButtonColor]: \`${resumeButtonColor}\`,
  [resumeButtonHoverBG]: \`${resumeButtonHoverBG}\`,
  [resumeButtonHoverColor]: \`${resumeButtonHoverColor}\`,
  [resumeButtonBG]: \`${resumeButtonBG}\`,
  [resumeHoverEnable]: ${resumeHoverEnable},
  [mediaHandles]: ${JSON.stringify(mediaHandles)},
};

export default aboutMe;

`;

const workExperienceInitial = ({
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
  workExperienceList,
}) => `\
import {
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
  workExperienceList,
} from '../constants/work_experience_page';

const workExperience = {
  [enable]: ${enable},
  [pageHeadline]: \`${pageHeadline}\`,
  [pageHeadlineColor]: \`${pageHeadlineColor}\`,
  [background]: \`${background}\`,
  [workExperienceList]: ${JSON.stringify(workExperienceList)},
};

export default workExperience;
`;

const projectInitial = ({
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
  projectCardColor,
  projectDescriptionColor,
  projectTitleColor,
  projectViewBtnBorder,
  projectViewBtnColor,
  projectTableColor,
  projectTableBg,
  popularProject,
  otherProject,
}) => `\
import {
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
  projectCardColor,
  projectDescriptionColor,
  projectTitleColor,
  projectViewBtnBorder,
  projectViewBtnColor,
  projectTableColor,
  projectTableBg,
  popularProject,
  otherProject,
} from '../constants/project_page';

const project = {
  [enable]: \`${enable}\`,
  [pageHeadline]: \`${pageHeadline}\`,
  [pageHeadlineColor]: \`${pageHeadlineColor}\`,
  [background]: \`${background}\`,
  [projectCardColor]: \`${projectCardColor}\`,
  [projectTitleColor]: \`${projectTitleColor}\`,
  [projectDescriptionColor]: \`${projectDescriptionColor}\`,
  [projectViewBtnColor]: \`${projectViewBtnColor}\`,
  [projectViewBtnBorder]: \`${projectViewBtnBorder}\`,
  [projectTableBg]: \`${projectTableBg}\`,
  [projectTableColor]: \`${projectTableColor}\`,
  [popularProject]: ${JSON.stringify(popularProject)},
  [otherProject]: ${JSON.stringify(otherProject)},
};

export default project;

`;

module.exports = {
  introductionInitial,
  aboutMeInitial,
  workExperienceInitial,
  projectInitial,
};
