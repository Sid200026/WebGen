import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  BACKGROUND,
  RESET,
  PROJECT_LOAD,
  PROJECT_CARD_COLOR,
  PROJECT_DESCRIPTION_COLOR,
  PROJECT_TITLE_COLOR,
  PROJECT_VIEW_BUTTON_BG,
  PROJECT_VIEW_BUTTON_COLOR,
  PROJECT_TABLE_BG,
  PROJECT_TABLE_COLOR,
  POPULAR_PROJECT_ADD,
  POPULAR_PROJECT_EDIT,
  POPULAR_PROJECT_REMOVE,
  OTHER_PROJECT_ADD,
  OTHER_PROJECT_EDIT,
  OTHER_PROJECT_REMOVE,
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

export const projectCardColor = (color) => ({
  type: PROJECT_CARD_COLOR,
  payload: { color },
});

export const projectTitleColor = (color) => ({
  type: PROJECT_TITLE_COLOR,
  payload: { color },
});

export const projectDescriptionColor = (color) => ({
  type: PROJECT_DESCRIPTION_COLOR,
  payload: { color },
});

export const projectViewBtnColor = (color) => ({
  type: PROJECT_VIEW_BUTTON_COLOR,
  payload: { color },
});

export const projectViewBtnBg = (color) => ({
  type: PROJECT_VIEW_BUTTON_BG,
  payload: { color },
});

export const projectTableBg = (color) => ({
  type: PROJECT_TABLE_BG,
  payload: { color },
});

export const projectTableColor = (color) => ({
  type: PROJECT_TABLE_COLOR,
  payload: { color },
});

export const popularProjectAdd = (response) => ({
  type: POPULAR_PROJECT_ADD,
  payload: { response },
});

export const popularProjectDelete = (index) => ({
  type: POPULAR_PROJECT_REMOVE,
  payload: { index },
});

export const popularProjectEdit = (response, index) => ({
  type: POPULAR_PROJECT_EDIT,
  payload: { response, index },
});

export const otherProjectAdd = (response) => ({
  type: OTHER_PROJECT_ADD,
  payload: { response },
});

export const otherProjectDelete = (index) => ({
  type: OTHER_PROJECT_REMOVE,
  payload: { index },
});

export const otherProjectEdit = (response, index) => ({
  type: OTHER_PROJECT_EDIT,
  payload: { response, index },
});

export const reset = () => ({
  type: RESET,
  payload: {},
});

export const load = (data) => ({
  type: PROJECT_LOAD,
  payload: { data },
});
