import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  BACKGROUND,
  PROJECT_CARD_COLOR,
  PROJECT_DESCRIPTION_COLOR,
  PROJECT_TITLE_COLOR,
  PROJECT_VIEW_BUTTON_BG,
  PROJECT_VIEW_BUTTON_COLOR,
  PROJECT_TABLE_BG,
  PROJECT_TABLE_COLOR,
  RESET,
  PROJECT_LOAD,
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
  projectCardColor,
  projectDescriptionColor,
  projectTitleColor,
  projectViewBtnBg,
  projectViewBtnColor,
  projectTableBg,
  projectTableColor,
} from '../constants/project_page';
// eslint-disable-next-line max-len
import { project as projectApp } from '../initialState/project_initial';

import projectUser from '../initialState/user.project_initial';

let project;

if (process.env.TYPE === 'app') project = projectApp;
else project = projectUser;

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
    case PROJECT_VIEW_BUTTON_BG:
      return { ...state, [projectViewBtnBg]: payload.color };
    case PROJECT_TABLE_BG:
      return { ...state, [projectTableBg]: payload.color };
    case PROJECT_TABLE_COLOR:
      return { ...state, [projectTableColor]: payload.color };
    case RESET:
      return project;
    case PROJECT_LOAD:
      return payload.data;
    default:
      return state;
  }
};
