export const DescriptionInfo = {
  title: 'Customize Description',
  image: {
    src: 'https://bit.ly/3cr31mU',
    alt: 'Description Image',
  },
  field: {
    description: {
      label: 'Description',
      help: 'A few short lines about yourself',
    },
    descriptionColor: {
      label: 'Color of the text',
    },
  },
};

export const LayoutInfo = {
  title: 'Customize Page Layout',
  image: {
    src: 'https://bit.ly/3cr31mU',
    alt: 'Page Layout Image',
  },
  field: {
    pageTitle: {
      label: 'Page Title',
    },
    pageTitleColor: {
      label: 'Page Title Color',
    },
    background: {
      label: 'Background of About Me Page',
    },
    menuColor: {
      label: 'Color of Menu Text',
    },
    menuBackground: {
      label: 'Background of Menu',
    },
  },
};

export const ResumeInfo = {
  title: 'Customize View Resume Button',
  help:
    // eslint-disable-next-line max-len
    'Since we frequenly update our resume, we require you to provide us a link to access your resume instead of uploading it so you can update it easily in the future',
  image: {
    src: 'https://bit.ly/3cr31mU',
    alt: 'Resume Image',
  },
  hoverEffect: {
    link: 'https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_hover',
    text: 'View an example',
  },
  field: {
    resumeUrl: {
      label: 'Resume URL',
      help: 'Upload your resume in Google Drive, Apple Cloud etc and add the link here',
    },
    resumeButtonText: {
      label: 'Resume Button Text',
    },
    resumeButtonBorder: {
      label: 'Color of the border',
    },
    resumeButtonColor: {
      label: 'Color of the text',
    },
    resumeButtonBackground: {
      label: 'Background of the button',
    },
    resumeButtonHover: {
      label: 'Enable hover effects?',
    },
    resumeButtonHoverColor: {
      label: 'Color of the button text on hover',
    },
    resumeButtonHoverBackground: {
      label: 'Background of the button on hover',
    },
  },
};

export const ProfilePictureInfo = {
  title: 'Customize Profile Picture',
  image: {
    src: 'https://bit.ly/3cr31mU',
    alt: 'Profile Picture Image',
  },
  field: {
    profilePicture: {
      label: 'Upload Profile Picture',
    },
  },
};

export const SkillInfo = {
  title: 'Customize Profile Picture',
  image: {
    src: 'https://bit.ly/3cr31mU',
    alt: 'Skill Image',
  },
  error: {
    emptySkill: 'Skill text cannot be empty',
    invalidSkillScore: 'Skill score must be between 0 and 100',
  },
  field: {
    background: {
      label: 'Background of each skill bar',
    },
    skillText: {
      label: 'Skill Text',
      help: 'For Eg. CSS',
    },
    skillScore: {
      label: 'Skill Score Out of 100',
      help: 'For Eg. 70',
    },
    skillBarColor: {
      label: 'Color of skill bar',
    },
  },
};

export const SocialMediaInfo = {
  title: 'Customize Social Media Handles',
  image: {
    src: 'https://bit.ly/3cr31mU',
    alt: 'Social Media Image',
  },
  help:
    // eslint-disable-next-line max-len
    'Warning : Original theme cannot be used for every logo. In those cases please check Use Light Theme',
  error: {
    emptyURL: 'Social Media URL cannot be empty',
    emptyType: 'Social Media Type cannot be empty',
  },
  field: {
    socialMediaURL: {
      label: 'Social Media URL',
      help: 'For example https://github.com/Sid200026',
    },
    socialMediaType: {
      label: 'Social Media Type',
      help: 'For example GitHub',
    },
    useLightTheme: {
      label: 'Use Light Theme ?',
    },
  },
};
