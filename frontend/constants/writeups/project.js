export const LayoutInfo = {
  title: 'Customize Page Layout',
  image: {
    src: '/public/images/Project/Page Layout.png',
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
      label: 'Background of Project Page',
    },
  },
};

export const OtherProjectInfo = {
  title: 'Customize Other Project Content',
  image: {
    src: '/public/images/Project/Other Projects.png',
    alt: 'Other Project Image',
  },
  help:
    // eslint-disable-next-line max-len
    'Apart from the popular projects, you can include other projects here. All the projects here will be displayed in a tabular format.',
  field: {
    projectTitle: {
      label: 'Project Title',
    },
    projectCaption: {
      label: 'Project Caption',
      help: 'Few words on the project',
    },
    description: {
      label: 'Description',
      help: 'Describe the project',
    },
    link: {
      label: 'Project Link',
      help:
        // eslint-disable-next-line max-len
        "If you don't provide a project link, the view button won't be displayed for that project",
    },
  },
  error: {
    emptyProjectTitle: 'Project Title cannot be empty',
    emptyProjectCaption: 'Project Caption cannot be empty',
    emptyProjectDescription: 'Project Description cannot be empty',
  },
};

export const PopularProjectInfo = {
  title: 'Customize Popular Project Card Content',
  image: {
    src: '/public/images/Project/Popular Projects.png',
    alt: 'Popular Project Image',
  },
  help:
    // eslint-disable-next-line max-len
    'Popular project are those projects you want to showcase along with images.',
  field: {
    projectTitle: {
      label: 'Project Title',
    },
    projectCaption: {
      label: 'Project Caption',
      help: 'Few words on the project',
    },
    description: {
      label: 'Description',
      help: 'Describe the project',
    },
    link: {
      label: 'Project Link',
      help:
        // eslint-disable-next-line max-len
        "If you don't provide a project link, the view button won't be displayed for that project",
    },
    projectImage: {
      label: 'Customize project picture',
    },
  },
  error: {
    emptyProjectTitle: 'Project Title cannot be empty',
    emptyProjectCaption: 'Project Caption cannot be empty',
    emptyProjectDescription: 'Project Description cannot be empty',
    emptyProjectImage:
      // eslint-disable-next-line max-len
      'Please upload an image for the project. If you do not want to upload an image, please use Other Projects',
  },
};

export const ProjectCardInfo = {
  title: 'Customize Project Cards',
  image: {
    src: '/public/images/Project/Project Card.png',
    alt: 'Popular Project Image',
  },
  field: {
    projectCardColor: {
      label: 'Project Card Color',
    },
    projectTitleColor: {
      label: 'Project Title Color',
    },
    projectDescriptionColor: {
      label: 'Project Description Color',
    },
    projectViewBtnColor: {
      label: 'Project View Button Color',
    },
    projectViewBtnBorder: {
      label: 'Project View Button Border',
    },
  },
};

export const ProjectTableInfo = {
  title: 'Customize Project Table',
  image: {
    src: '/public/images/Project/Project Table.png',
    alt: 'Popular Project Image',
  },
  field: {
    projectTableBackground: {
      label: 'Project Table Background',
    },
    projectTableTextColor: {
      label: 'Project Table Text Color',
    },
  },
};
