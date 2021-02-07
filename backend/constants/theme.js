const whiteTheme = {
  template_name: 'White Theme 1',
  template_image: 'https://bit.ly/3cr31mU',
  template_link: 'https://sid200026.github.io/typing-effect/',
  template_config: {
    introduction: {
      enable: true,
      greetingText: "Hello I'm",
      greetingColor: '#e6e6e6',
      nameText: 'Your name here',
      nameColor: '#ffffff',
      nameBold: false,
      specialisationText: [
        'Add specialisation 1',
        'Specialisation 2 comes here and so on',
      ],
      specialisationColor: '#ffffff',
      particleTheme: 'Static',
      particleThemeBackgroundColor: '#000000',
      particleThemeEntityColor: '#ff9900',
      buttonText: 'Visit My Profile',
      buttonBorder: '#ffffff',
      buttonColor: '#ffffff',
      buttonHoverBG: '#ffffff',
      buttonHoverColor: '#000000',
      font: 'Times New Roman, Times, serif, Arial, Helvetica',
      metadesc: 'Add website description here',
      title: 'Add website title here',
      hoverEffect: true,
      favicon: {},
    },
    aboutMe: {
      enable: true,
      pageHeadline: 'About Me',
      pageHeadlineColor: '#000000',
      profile: {
        url: 'https://picsum.photos/200.jpg',
        name: 'test.jpg',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis. Sed porta tempor ante sit amet facilisis. Praesent ac mi sit amet velit tempor fermentum. Maecenas ornare in justo id pretium. Quisque eu tortor cursus, dapibus neque vitae, vulputate purus. Nunc rhoncus mi nec augue suscipit tristique.',
      descriptionColor: '#000000',
      skills: [
        { text: 'Skill 1', value: 90, color: '#1fafad' },
        { text: 'Skill 2', value: 85, color: '#1fafad' },
        { text: 'Skill 3', value: 80, color: '#1fafad' },
        { text: 'Skill 4', value: 75, color: '#1fafad' },
        { text: 'Skill 5', value: 75, color: '#1fafad' },
        { text: 'Skill 6', value: 70, color: '#1faead' },
        { text: 'Skill 7', value: 80, color: '#1faead' },
      ],
      skillsBackground: '#b8b9b5',
      background: '#e6e6e6',
      menuBackground: '#0d0d0d',
      menuColor: '#ffffff',
      resumeURL: 'Add Resume URL here',
      resumeButtonText: 'View My Resume',
      resumeButtonBorder: '#000000',
      resumeButtonColor: '#000000',
      resumeButtonHoverBG: '#000000',
      resumeButtonHoverColor: '#ffffff',
      resumeButtonBG: '#e6e6e6',
      resumeHoverEnable: true,
      mediaHandles: [
        { url: 'https://github.com', media: 'GitHub', theme: true },
        {
          url: 'https://www.codechef.com',
          media: 'CodeChef',
          theme: true,
        },
        { url: 'https://leetcode.com/', media: 'LeetCode', theme: true },
        { url: 'https://www.instagram.com/', media: 'Instagram', theme: true },
        {
          url: 'https://www.linkedin.com/',
          media: 'LinkedIn',
          theme: true,
        },
      ],
    },
    workExperience: {
      enable: true,
      pageHeadline: 'Work Experience',
      pageHeadlineColor: '#000000',
      background: '#d4d4d4',
      workExperienceList: [
        {
          companyName: 'Add Company Name Here',
          companyNameColor: '#000000',
          startDate: '2020-06',
          endDate: '2020-09',
          role: 'Add Role Here',
          subTextColor: '#4d4d4d',
          information: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae.',
          ],
          informationColor: '#000000',
        },
        {
          companyName: 'Add Company Name Here',
          companyNameColor: '#000000',
          startDate: '2020-03',
          endDate: '2020-07',
          role: 'Add Role Here',
          subTextColor: '#4d4d4d',
          information: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae.',
          ],
          informationColor: '#000000',
        },
        {
          companyName: 'Add Company Name Here',
          companyNameColor: '#000000',
          startDate: '2020-04',
          endDate: '2020-06',
          role: 'Add Role Here',
          subTextColor: '#4d4d4d',
          information: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae.',
          ],
          informationColor: '#000000',
        },
      ],
    },
    project: {
      enable: true,
      pageHeadline: 'Projects',
      pageHeadlineColor: '#000000',
      background: '#cacaca',
      projectCardColor: '#c2c2c2',
      projectTitleColor: '#000000',
      projectDescriptionColor: '#141414',
      projectViewBtnColor: '#000000',
      projectViewBtnBorder: '#000000',
      projectTableBg: '#cacaca',
      projectTableColor: '#000000',
      popularProject: [
        {
          projectTitle: 'Main Project1',
          projectImage: {
            projectImageURL: 'https://picsum.photos/200.jpg',
            projectImageName: 'test.jpg',
          },
          projectCaption: 'About Project Caption',
          projectDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum mattis vulputate. Proin nec tellus ullamcorper, pellentesque dolor id, dapibus ex. Nullam ex sapien, auctor eget felis non, faucibus commodo dui. Integer vulputate dolor sit amet magna venenatis, bibendum pharetra nibh elementum. Phasellus auctor enim eget pellentesque ullamcorper.',
          projectLink: 'https://github.com/Sid200026/WebGen',
        },
        {
          projectTitle: 'Main Project2',
          projectImage: {
            projectImageURL: 'https://picsum.photos/200.jpg',
            projectImageName: 'test.jpg',
          },
          projectCaption: 'About Project Caption',
          projectDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum mattis vulputate. Proin nec tellus ullamcorper, pellentesque dolor id, dapibus ex. Nullam ex sapien, auctor eget felis non, faucibus commodo dui. Integer vulputate dolor sit amet magna venenatis, bibendum pharetra nibh elementum. Phasellus auctor enim eget pellentesque ullamcorper.',
          projectLink: 'https://github.com/Sid200026/WebGen',
        },
        {
          projectTitle: 'Main Project3',
          projectImage: {
            projectImageURL: 'https://picsum.photos/200.jpg',
            projectImageName: 'test.jpg',
          },
          projectCaption: 'About Project Caption',
          projectDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum mattis vulputate. Proin nec tellus ullamcorper, pellentesque dolor id, dapibus ex. Nullam ex sapien, auctor eget felis non, faucibus commodo dui. Integer vulputate dolor sit amet magna venenatis, bibendum pharetra nibh elementum. Phasellus auctor enim eget pellentesque ullamcorper.',
          projectLink: 'https://github.com/Sid200026/WebGen',
        },
      ],
      otherProject: [
        {
          projectTitle: 'Project 1',
          projectDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nisi, consequat a pretium id, auctor et purus. Phasellus ac mauris nibh. Etiam posuere iaculis lacinia. Aliquam viverra ipsum non gravida convallis.',
          projectLink: 'https://github.com/Sid200026/WebGen',
          projectCaption: 'About Project 1',
        },
        {
          projectTitle: 'Project 2',
          projectDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nisi, consequat a pretium id, auctor et purus. Phasellus ac mauris nibh. Etiam posuere iaculis lacinia. Aliquam viverra ipsum non gravida convallis.',
          projectLink: 'https://github.com/Sid200026/WebGen',
          projectCaption: 'About Project 2',
        },
        {
          projectTitle: 'Project 3',
          projectDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nisi, consequat a pretium id, auctor et purus. Phasellus ac mauris nibh. Etiam posuere iaculis lacinia. Aliquam viverra ipsum non gravida convallis.',
          projectLink: 'https://github.com/Sid200026/WebGen',
          projectCaption: 'About Project 3',
        },
        {
          projectTitle: 'Project 4',
          projectDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nisi, consequat a pretium id, auctor et purus. Phasellus ac mauris nibh. Etiam posuere iaculis lacinia. Aliquam viverra ipsum non gravida convallis.',
          projectLink: 'https://github.com/Sid200026/WebGen',
          projectCaption: 'About Project 4',
        },
        {
          projectTitle: 'Project 5',
          projectDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nisi, consequat a pretium id, auctor et purus. Phasellus ac mauris nibh. Etiam posuere iaculis lacinia. Aliquam viverra ipsum non gravida convallis.',
          projectLink: 'https://github.com/Sid200026/WebGen',
          projectCaption: 'About Project 5',
        },
        {
          projectTitle: 'Project 6',
          projectDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim nisi, consequat a pretium id, auctor et purus. Phasellus ac mauris nibh. Etiam posuere iaculis lacinia. Aliquam viverra ipsum non gravida convallis.',
          projectLink: 'https://github.com/Sid200026/WebGen',
          projectCaption: 'About Project 6',
        },
      ],
    },
    defaultTheme: {
      skillColor: '#1fafad',
      subTextColor: '#4d4d4d',
      informationColor: '#000000',
      companyNameColor: '#000000',
    },
    achievement: {
      enable: true,
      pageHeadline: 'Achievements',
      pageHeadlineColor: '#000000',
      background: '#c0c0c0',
      achievementCardColor: '#b8b8b8',
      achievementTitleColor: '#000000',
      achievementDescriptionColor: '#000000',
      achievementViewBtnColor: '#000000',
      achievementViewBtnBorder: '#000000',
      achievements: [
        {
          achievementTitle: 'Achievement 1',
          achievementImage: {
            achievementImageURL: 'https://picsum.photos/200.jpg',
            achievementImageName: 'test.jpg',
          },
          achievementCaption: 'About Achievement 1',
          achievementDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum mattis vulputate. Proin nec tellus ullamcorper, pellentesque dolor id, dapibus ex. Nullam ex sapien, auctor eget felis non, faucibus commodo dui. Integer vulputate dolor sit amet magna venenatis, bibendum pharetra nibh elementum. Phasellus auctor enim eget pellentesque ullamcorper.',
          achievementLink: 'https://github.com/Sid200026/WebGen',
        },
        {
          achievementTitle: 'Achievement 2',
          achievementImage: {
            achievementImageURL: 'https://picsum.photos/200.jpg',
            achievementImageName: 'test.jpg',
          },
          achievementCaption: 'About Achievement 2',
          achievementDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum mattis vulputate. Proin nec tellus ullamcorper, pellentesque dolor id, dapibus ex. Nullam ex sapien, auctor eget felis non, faucibus commodo dui. Integer vulputate dolor sit amet magna venenatis, bibendum pharetra nibh elementum. Phasellus auctor enim eget pellentesque ullamcorper.',
          achievementLink: 'test.jpg',
        },
        {
          achievementTitle: 'Achievement 3',
          achievementImage: {
            achievementImageURL: 'https://picsum.photos/200.jpg',
            achievementImageName: 'test.jpg',
          },
          achievementCaption: 'About Achievement 3',
          achievementDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum mattis vulputate. Proin nec tellus ullamcorper, pellentesque dolor id, dapibus ex. Nullam ex sapien, auctor eget felis non, faucibus commodo dui. Integer vulputate dolor sit amet magna venenatis, bibendum pharetra nibh elementum. Phasellus auctor enim eget pellentesque ullamcorper.',
          achievementLink: 'https://github.com/Sid200026/WebGen',
        },
        {
          achievementTitle: 'Achievement 4',
          achievementImage: {
            achievementImageURL: 'https://picsum.photos/200.jpg',
            achievementImageName: '103c4ba9-f8cf-4ac9-803f-6c48f45405f6me.jpg',
          },
          achievementCaption: 'About Achievement 4',
          achievementDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum mattis vulputate. Proin nec tellus ullamcorper, pellentesque dolor id, dapibus ex. Nullam ex sapien, auctor eget felis non, faucibus commodo dui. Integer vulputate dolor sit amet magna venenatis, bibendum pharetra nibh elementum. Phasellus auctor enim eget pellentesque ullamcorper.',
          achievementLink: 'https://github.com/Sid200026/WebGen',
        },
        {
          achievementTitle: 'Achievement 5',
          achievementImage: {
            achievementImageURL: 'https://picsum.photos/200.jpg',
            achievementImageName: '103c4ba9-f8cf-4ac9-803f-6c48f45405f6me.jpg',
          },
          achievementCaption: 'About Achievement 5',
          achievementDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum mattis vulputate. Proin nec tellus ullamcorper, pellentesque dolor id, dapibus ex. Nullam ex sapien, auctor eget felis non, faucibus commodo dui. Integer vulputate dolor sit amet magna venenatis, bibendum pharetra nibh elementum. Phasellus auctor enim eget pellentesque ullamcorper.',
          achievementLink: 'https://github.com/Sid200026/WebGen',
        },
      ],
    },
  },
};

module.exports = { whiteTheme };
