import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  BACKGROUND,
  WORK_EXPERIENCE_ADD,
  WORK_EXPERIENCE_DELETE,
  WORK_EXPERIENCE_MODIFY,
} from '../constants/work_experience_page';

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

export const workExperienceAdd = (response) => ({
  type: WORK_EXPERIENCE_ADD,
  payload: { response },
});

export const workExperienceDelete = (index) => ({
  type: WORK_EXPERIENCE_DELETE,
  payload: { index },
});

export const workExperienceModify = (response, index) => ({
  type: WORK_EXPERIENCE_MODIFY,
  payload: { response, index },
});
