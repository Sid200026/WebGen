import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  BACKGROUND,
  RESET,
  PROJECT_LOAD,
} from '../constants/project_page';

export const enablePage = (response) => ({
  type: ENABLE_PAGE,
  payload: { response },
});

export const pageHeadline = (text) => ({
  type: PAGE_HEADLINE,
  payload: { text },
});

export const pageHeadlineColor = (color) => ({
  type: PAGE_HEADLINE_COLOR,
  payload: { color },
});

export const background = (color) => ({
  type: BACKGROUND,
  payload: { color },
});

export const reset = () => ({
  type: RESET,
  payload: {},
});

export const load = (data) => ({
  type: PROJECT_LOAD,
  payload: { data },
});
