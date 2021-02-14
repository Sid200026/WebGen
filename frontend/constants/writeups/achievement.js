export const LayoutInfo = {
  title: 'Customize Page Layout',
  image: {
    src: '/public/images/Achievement/Page Layout.png',
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
      label: 'Background of Achievement Page',
    },
  },
};

export const AchievementCardInfo = {
  title: 'Customize Achievement Cards',
  image: {
    src: '/public/images/Achievement/Achievement Card.png',
    alt: 'Achievement Image',
  },
  field: {
    achievementCardColor: {
      label: 'Achievement Card Color',
    },
    achievementTitleColor: {
      label: 'Achievement Title Color',
    },
    achievementDescriptionColor: {
      label: 'Achievement Description Color',
    },
    achievementViewBtnColor: {
      label: 'Achievement View Button Color',
    },
    achievementViewBtnBorder: {
      label: 'Achievement View Button Border',
    },
  },
};

export const AchievementInfo = {
  title: 'Customize Achievement Card Content',
  image: {
    src: '/public/images/Achievement/Achievements.png',
    alt: 'Achievement Image',
  },
  help:
    // eslint-disable-next-line max-len
    'Achievements can include Certifications, Publications, Blogs, etc.',
  field: {
    achievementTitle: {
      label: 'Achievement Title',
    },
    achievementCaption: {
      label: 'Achievement Caption',
      help: 'Few words on the achievement',
    },
    description: {
      label: 'Description',
      help: 'Describe the achievement',
    },
    link: {
      label: 'Achievement Link',
      help:
        // eslint-disable-next-line max-len
        "If you don't provide a link, the view button won't be displayed for that achievement",
    },
    achievementImage: {
      label: 'Customize achievement picture',
    },
  },
  error: {
    emptyAchievementTitle: 'Achievement Title cannot be empty',
    emptyAchievementCaption: 'Achievement Caption cannot be empty',
    emptyAchievementDescription: 'Achievement Description cannot be empty',
    emptyAchievementImage:
      // eslint-disable-next-line max-len
      'Please upload an image for the achievement',
  },
};
