const DOWNLOADABLE_CONTENT = {
  introduction: ['favicon'],
  aboutMe: ['profile'],
  workExperience: [],
  project: [
    {
      key: 'popularProject',
      child: 'projectImage',
      url: 'projectImageURL',
      filename: 'projectImageName',
    },
  ],
  achievement: [
    {
      key: 'achievements',
      child: 'achievementImage',
      url: 'achievementImageURL',
      filename: 'achievementImageName',
    },
  ],
};

module.exports = { DOWNLOADABLE_CONTENT };
