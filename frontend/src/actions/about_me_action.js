import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  PROFILE_PIC,
  PROFILE_PIC_REMOVE,
  DESCRIPTION_TEXT,
  DESCRIPTION_COLOR,
  SKILLS_ADD,
  SKILLS_REMOVE,
  SKILLS_BACKGROUND,
  SKILLS_MODIFY,
  BACKGROUND,
  MENU_COLOR,
  MENU_BACKGROUND,
  RESUME_URL,
  RESUME_BUTTON_TEXT,
  RESUME_BUTTON_BORDER,
  RESUME_BUTTON_COLOR,
  RESUME_BUTTON_HOVER_BG,
  RESUME_BUTTON_HOVER_COLOR,
  RESUME_BUTTON_BG,
  RESUME_HOVER_EFFECT,
  SOCIAL_MEDIA_ADD,
  SOCIAL_MEDIA_REMOVE,
  SOCIAL_MEDIA_UPDATE,
  RESET,
} from '../constants/about_me_page';

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

export const profilePic = (url, name) => ({
  type: PROFILE_PIC,
  payload: { url, name },
});

export const profilePicRemove = () => ({
  type: PROFILE_PIC_REMOVE,
  payload: {},
});

export const descriptionText = (text) => ({
  type: DESCRIPTION_TEXT,
  payload: { text },
});

export const descriptionColor = (color) => ({
  type: DESCRIPTION_COLOR,
  payload: { color },
});

export const skillsBackground = (color) => ({
  type: SKILLS_BACKGROUND,
  payload: { color },
});

export const skillsAdd = (text, value, color) => ({
  type: SKILLS_ADD,
  payload: { text, value, color },
});

export const skillsRemove = (index) => ({
  type: SKILLS_REMOVE,
  payload: { index },
});

export const skillsModify = (text, value, color, index) => ({
  type: SKILLS_MODIFY,
  payload: { text, value, color, index },
});

export const background = (color) => ({
  type: BACKGROUND,
  payload: { color },
});

export const menuColor = (color) => ({
  type: MENU_COLOR,
  payload: { color },
});

export const menuBackground = (color) => ({
  type: MENU_BACKGROUND,
  payload: { color },
});

export const resumeURL = (url) => ({
  type: RESUME_URL,
  payload: { url },
});

export const resumeButtonText = (text) => ({
  type: RESUME_BUTTON_TEXT,
  payload: { text },
});

export const resumeButtonBorder = (color) => ({
  type: RESUME_BUTTON_BORDER,
  payload: { color },
});

export const resumeButtonColor = (color) => ({
  type: RESUME_BUTTON_COLOR,
  payload: { color },
});

export const resumeButtonBackground = (color) => ({
  type: RESUME_BUTTON_BG,
  payload: { color },
});

export const resumeButtonHoverBackgroundColor = (color) => ({
  type: RESUME_BUTTON_HOVER_BG,
  payload: { color },
});

export const resumeButtonHoverColor = (color) => ({
  type: RESUME_BUTTON_HOVER_COLOR,
  payload: { color },
});

export const resumeHoverEnable = (value) => ({
  type: RESUME_HOVER_EFFECT,
  payload: { value },
});

export const socialMediaAdd = (url, media, theme) => ({
  type: SOCIAL_MEDIA_ADD,
  payload: { url, media, theme },
});

export const socialMediaRemove = (index) => ({
  type: SOCIAL_MEDIA_REMOVE,
  payload: { index },
});

export const socialMediaModify = (url, media, theme, index) => ({
  type: SOCIAL_MEDIA_UPDATE,
  payload: { url, media, theme, index },
});

export const reset = () => ({
  type: RESET,
  payload: {},
});
