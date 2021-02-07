import {
  ENABLE_PAGE,
  RESET,
  ACHIEVEMENT_LOAD,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  ACHIEVEMENT_CARD_COLOR,
  ACHIEVEMENT_DESCRIPTION_COLOR,
  ACHIEVEMENT_TITLE_COLOR,
  ACHIEVEMENT_VIEW_BUTTON_BORDER,
  ACHIEVEMENT_VIEW_BUTTON_COLOR,
  BACKGROUND,
  ACHIEVEMENT_ADD,
  ACHIEVEMENT_BATCH_REMOVE,
  ACHIEVEMENT_EDIT,
  ACHIEVEMENT_REMOVE,
} from '../constants/achievements_page';

export const enablePage = (response) => ({
  type: ENABLE_PAGE,
  payload: { response },
});

export const reset = () => ({
  type: RESET,
  payload: {},
});

export const pageHeadline = (text) => ({
  type: PAGE_HEADLINE,
  payload: { text },
});

export const pageHeadlineColor = (color) => ({
  type: PAGE_HEADLINE_COLOR,
  payload: { color },
});

export const achievementCardColor = (color) => ({
  type: ACHIEVEMENT_CARD_COLOR,
  payload: { color },
});

export const achievementTitleColor = (color) => ({
  type: ACHIEVEMENT_TITLE_COLOR,
  payload: { color },
});

export const achievementDescriptionColor = (color) => ({
  type: ACHIEVEMENT_DESCRIPTION_COLOR,
  payload: { color },
});

export const achievementViewBtnColor = (color) => ({
  type: ACHIEVEMENT_VIEW_BUTTON_COLOR,
  payload: { color },
});

export const achievementViewBtnBorder = (color) => ({
  type: ACHIEVEMENT_VIEW_BUTTON_BORDER,
  payload: { color },
});

export const achievementAdd = (response) => ({
  type: ACHIEVEMENT_ADD,
  payload: { response },
});

export const achievementDelete = (index) => ({
  type: ACHIEVEMENT_REMOVE,
  payload: { index },
});

export const achievementBatchDelete = (arr) => ({
  type: ACHIEVEMENT_BATCH_REMOVE,
  payload: { arr },
});

export const achievementEdit = (response, index) => ({
  type: ACHIEVEMENT_EDIT,
  payload: { response, index },
});

export const background = (color) => ({
  type: BACKGROUND,
  payload: { color },
});

export const load = (data) => ({
  type: ACHIEVEMENT_LOAD,
  payload: { data },
});
