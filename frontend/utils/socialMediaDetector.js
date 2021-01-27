const GITHUB = 'GitHub';
const GITLAB = 'GitLab';
const LINKEDIN = 'LinkedIn';
const FACEBOOK = 'Facebook';
const TWITTER = 'Twitter';
const INSTAGRAM = 'Instagram';
const MEDIUM = 'Medium';
const YOUTUBE = 'YouTube';
const TIKTOK = 'Tik Tok'; // sad noises
const SNAPCHAT = 'Snapchat';
const REDDIT = 'Reddit';
const HACKERRANK = 'Hackerrank';
const LEETCODE = 'LeetCode';
const CODECHEF = 'CodeChef';
const DISCORD = 'Discord';

// darkTheme refers to the original theme

const handleConfig = [
  {
    name: GITHUB,
    regex: /github/i,
    darkTheme: {
      colorPrimary: '#333333',
      colorSecondary: '#f5f5f5',
      logo: 'GitHub-Mark-Light-120px-plus.png',
    },
    lightTheme: {
      colorPrimary: '#ffffff',
      colorSecondary: '#333333',
      logo: 'GitHub-Mark-120px-plus.png',
    },
  },
  {
    name: GITLAB,
    regex: /gitlab/i,
    lightTheme: {
      colorPrimary: '#FFFFFF',
      colorSecondary: '#E2432A',
      logo: 'GitLab_Logo.svg',
    },
    darkTheme: {
      colorPrimary: '#C93D2C',
      colorSecondary: '#FFFFFF',
      logo: 'GitLab_Logo.svg',
    },
  },
  {
    name: LINKEDIN,
    regex: /linkedin/i,
    lightTheme: {
      colorPrimary: '#FFFFFF',
      colorSecondary: '#2867B2',
      logo: 'LI-In-Bug.png',
    },
    darkTheme: {
      colorPrimary: '#2867B2',
      colorSecondary: '#FFFFFF',
      logo: 'LI-In-Bug.png',
    },
  },
  {
    name: FACEBOOK,
    regex: /facebook/i,
    lightTheme: {
      colorPrimary: '#FFFFFF',
      colorSecondary: '#1A77F2',
      logo: 'f_logo_RGB-Blue_1024.png',
    },
    darkTheme: {
      colorPrimary: '#1A77F2',
      colorSecondary: '#ffffff',
      logo: 'f_logo_RGB-Black_1024.png',
    },
  },
  {
    name: TWITTER,
    regex: /twitter/i,
    lightTheme: {
      colorPrimary: '#FFFFFF',
      colorSecondary: '#1DA1F2',
      logo: 'Twitter_Social_Icon_Circle_Color.png',
    },
    darkTheme: {
      colorPrimary: '#1DA1F2',
      colorSecondary: '#ffffff',
      logo: 'Twitter_Social_Icon_Circle_White.png',
    },
  },
  {
    name: INSTAGRAM,
    regex: /instagram/i,
    lightTheme: {
      colorPrimary: '#FFFFFF',
      colorSecondary: '#E1306C',
      logo: 'Instagram_AppIcon_Aug2017.png',
    },
    darkTheme: {
      colorPrimary: '#E1306C',
      colorSecondary: '#FFFFFF',
      logo: 'Instagram_AppIcon_Aug2017.png',
    },
  },
  {
    name: MEDIUM,
    regex: /medium/i,
    lightTheme: {
      colorPrimary: '#ffffff',
      colorSecondary: '#000000',
      logo: 'Medium-Symbol-Black-RGB@1x.png',
    },
    darkTheme: {
      colorPrimary: '#000000',
      colorSecondary: '#ffffff',
      logo: 'Medium-Symbol-White-RGB@1x.png',
    },
  },
  {
    name: YOUTUBE,
    regex: /youtube/i,
    lightTheme: {
      colorPrimary: '#ffffff',
      colorSecondary: '#FB0001',
      logo: 'youtube_social_icon_red.png',
    },
    darkTheme: {
      colorPrimary: '#FB0001',
      colorSecondary: '#ffffff',
      logo: 'youtube_social_icon_dark.png',
    },
  },
  {
    name: TIKTOK,
    regex: /tiktok/i,
    lightTheme: {
      colorPrimary: '#ffffff',
      colorSecondary: '#000000',
      logo: 'tiktok.png',
    },
    darkTheme: {
      colorPrimary: '#000000',
      colorSecondary: '#30F7EF',
      logo: 'tiktok.png',
    },
  },
  {
    name: SNAPCHAT,
    regex: /snapchat/i,
    darkTheme: {
      colorPrimary: '#FEFC00',
      colorSecondary: '#262626',
      logo: 'Snapchat App Icon.png',
    },
    lightTheme: {
      colorPrimary: '#ffffff',
      colorSecondary: '#262626',
      logo: 'Ghost Logo (for light backgrounds).png',
    },
  },
  {
    name: REDDIT,
    regex: /reddit/i,
    darkTheme: {
      colorPrimary: '#FB4502',
      colorSecondary: '#FFFFFF',
      logo: 'Reddit_Mark_OnWhite.png',
    },
    lightTheme: {
      colorPrimary: '#ffffff',
      colorSecondary: '#000000',
      logo: 'Reddit_Mark_OnWhite.png',
    },
  },
  {
    name: HACKERRANK,
    regex: /hackerrank/i,
    colorPrimary: '#FFFFFF',
    colorSecondary: '#1CA94D',
    logo: 'HackerRank_logo.svg',
  },
  {
    name: LEETCODE,
    regex: /leetcode/i,
    lightTheme: {
      colorPrimary: '#ffffff',
      colorSecondary: '#070706',
      logo: 'LeetCode_logo_black.png',
    },
    darkTheme: {
      colorPrimary: '#070706',
      colorSecondary: '#F5F5F5',
      logo: 'LeetCode_logo_black.png',
    },
  },
  {
    name: CODECHEF,
    regex: /codechef/i,
    lightTheme: {
      colorPrimary: '#ffffff',
      colorSecondary: '#5B4435',
      logo: 'codechef-removebg-preview.png',
    },
    darkTheme: {
      colorPrimary: '#5B4435',
      colorSecondary: '#FFFFFF',
      logo: 'codechef-removebg-preview.png',
    },
  },
  {
    name: DISCORD,
    regex: /discord/i,
    lightTheme: {
      colorPrimary: '#FFFFFF',
      colorSecondary: '#7289DA',
      logo: 'Discord-Logo-Color.png',
    },
    darkTheme: {
      colorPrimary: '#7289DA',
      colorSecondary: '#000000',
      logo: 'Discord-Logo-White.png',
    },
  },
];

export const getMediaName = (name) => {
  const handles = handleConfig.filter((mediaHandle) => {
    const pattern = mediaHandle.regex;
    return pattern.test(name);
  });
  if (handles.length === 0) {
    return '';
  }
  return handles[0].name;
};

export const getMediaInfo = (type) => {
  const handles = handleConfig.filter((mediaHandle) => {
    return mediaHandle.name === type;
  });
  if (handles.length === 0) {
    return {
      name: type,
      status: false,
    };
  }
  return {
    ...handles[0],
    status: true,
  };
};
