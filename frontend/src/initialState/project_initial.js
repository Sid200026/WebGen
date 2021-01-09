import {
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
  projectCardColor,
  projectDescriptionColor,
  projectTitleColor,
  projectViewBtnBg,
  projectViewBtnColor,
  projectTableColor,
  projectTableBg,
  popularProject,
  otherProject,
} from '../constants/project_page';

const project = {
  [enable]: false,
  [pageHeadline]: 'Projects',
  [pageHeadlineColor]: '#000000',
  [background]: '#ffffff',
  [projectCardColor]: '#fafafa',
  [projectTitleColor]: '#000000',
  [projectDescriptionColor]: '#000000',
  [projectViewBtnColor]: '#000000',
  [projectViewBtnBg]: '#fafafa',
  [projectTableBg]: '#ffffff',
  [projectTableColor]: '#000000',
  [popularProject]: [],
  [otherProject]: [],
};

export { project };
