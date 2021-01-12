import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  BACKGROUND,
  PROJECT_CARD_COLOR,
  PROJECT_DESCRIPTION_COLOR,
  PROJECT_TITLE_COLOR,
  PROJECT_VIEW_BUTTON_BORDER,
  PROJECT_VIEW_BUTTON_COLOR,
  PROJECT_TABLE_BG,
  PROJECT_TABLE_COLOR,
  RESET,
  PROJECT_LOAD,
  POPULAR_PROJECT_ADD,
  POPULAR_PROJECT_EDIT,
  POPULAR_PROJECT_REMOVE,
  OTHER_PROJECT_ADD,
  OTHER_PROJECT_EDIT,
  OTHER_PROJECT_REMOVE,
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
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
// eslint-disable-next-line max-len
import { project as projectApp } from '../initialState/project_initial';

import projectUser from '../initialState/user.project_initial';

let project;

if (process.env.TYPE === 'app') project = projectApp;
else project = projectUser;

const addElementAtPositionArray = (array, index, payload) => {
  return array
    .slice(0, index)
    .concat(payload)
    .concat(array.slice(index + 1, array.length));
};

const removeElementFromArray = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
};

export const projectReducer = (state = project, { type, payload }) => {
  switch (type) {
    case ENABLE_PAGE:
      return { ...state, [enable]: payload.response };
    case PAGE_HEADLINE:
      return { ...state, [pageHeadline]: payload.text };
    case PAGE_HEADLINE_COLOR:
      return { ...state, [pageHeadlineColor]: payload.color };
    case BACKGROUND:
      return { ...state, [background]: payload.color };
    case PROJECT_CARD_COLOR:
      return { ...state, [projectCardColor]: payload.color };
    case PROJECT_DESCRIPTION_COLOR:
      return { ...state, [projectDescriptionColor]: payload.color };
    case PROJECT_TITLE_COLOR:
      return { ...state, [projectTitleColor]: payload.color };
    case PROJECT_VIEW_BUTTON_COLOR:
      return { ...state, [projectViewBtnColor]: payload.color };
    case PROJECT_VIEW_BUTTON_BORDER:
      return { ...state, [projectViewBtnBorder]: payload.color };
    case PROJECT_TABLE_BG:
      return { ...state, [projectTableBg]: payload.color };
    case PROJECT_TABLE_COLOR:
      return { ...state, [projectTableColor]: payload.color };
    case POPULAR_PROJECT_ADD:
      return {
        ...state,
        [popularProject]: state.popularProject.concat({
          projectTitle: payload.response.projectTitle,
          projectImage: payload.response.projectImage,
          projectCaption: payload.response.projectCaption,
          projectDescription: payload.response.projectDescription,
          projectLink: payload.response.projectLink,
        }),
      };
    case POPULAR_PROJECT_EDIT:
      return {
        ...state,
        [popularProject]: addElementAtPositionArray(
          state.popularProject,
          payload.index,
          {
            projectTitle: payload.response.projectTitle,
            projectImage: payload.response.projectImage,
            projectCaption: payload.response.projectCaption,
            projectDescription: payload.response.projectDescription,
            projectLink: payload.response.projectLink,
          },
        ),
      };
    case POPULAR_PROJECT_REMOVE:
      return {
        ...state,
        [popularProject]: removeElementFromArray(state.popularProject, payload.index),
      };
    case OTHER_PROJECT_ADD:
      return {
        ...state,
        [otherProject]: state.popularProject.concat({
          projectTitle: payload.response.projectTitle,
          projectDescription: payload.response.projectDescription,
          projectLink: payload.response.projectLink,
          projectCaption: payload.response.projectCaption,
        }),
      };
    case OTHER_PROJECT_EDIT:
      return {
        ...state,
        [otherProject]: addElementAtPositionArray(state.otherProject, payload.index, {
          projectTitle: payload.response.projectTitle,
          projectDescription: payload.response.projectDescription,
          projectLink: payload.response.projectLink,
          projectCaption: payload.response.projectCaption,
        }),
      };
    case OTHER_PROJECT_REMOVE:
      return {
        ...state,
        [otherProject]: removeElementFromArray(state.otherProject, payload.index),
      };
    case RESET:
      return project;
    case PROJECT_LOAD:
      return payload.data;
    default:
      return state;
  }
};
