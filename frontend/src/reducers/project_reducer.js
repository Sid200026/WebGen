import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  BACKGROUND,
  RESET,
  PROJECT_LOAD,
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
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
    case RESET:
      return project;
    case PROJECT_LOAD:
      return payload.data;
    default:
      return state;
  }
};
