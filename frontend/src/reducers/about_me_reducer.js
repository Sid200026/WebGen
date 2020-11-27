import {
  ENABLE_PAGE,
  PROFILE_PIC,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
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
  mediaHandles,
  enable,
  profile,
  pageHeadline,
  pageHeadlineColor,
  description,
  descriptionColor,
  skills,
  skillsBackground,
  background,
  menuColor,
  menuBackground,
  resumeURL,
  resumeButtonText,
  resumeButtonBorder,
  resumeButtonColor,
  resumeButtonHoverBG,
  resumeButtonHoverColor,
  resumeButtonBG,
  resumeHoverEnable,
} from '../constants/about_me_page';
import { aboutMe as aboutMeApp } from '../initialState/about_me_initial';
// eslint-disable-next-line max-len
import { aboutMe as aboutMeUser } from '../initialState/user.about_me_initial';

let aboutMe;

if (process.env.TYPE === 'app') aboutMe = aboutMeApp;
else aboutMe = aboutMeUser;

const removeElementFromArray = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
};

const addElementAtPositionArray = (array, index, payload) => {
  return array
    .slice(0, index)
    .concat(payload)
    .concat(array.slice(index + 1, array.length));
};

export const aboutMeReducer = (state = aboutMe, { type, payload }) => {
  switch (type) {
    case ENABLE_PAGE:
      return { ...state, [enable]: payload.response };
    case PROFILE_PIC:
      return { ...state, [profile]: { url: payload.url, name: payload.name } };
    case PAGE_HEADLINE:
      return { ...state, [pageHeadline]: payload.text };
    case PAGE_HEADLINE_COLOR:
      return { ...state, [pageHeadlineColor]: payload.color };
    case PROFILE_PIC_REMOVE:
      return { ...state, [profile]: {} };
    case DESCRIPTION_TEXT:
      return { ...state, [description]: payload.text };
    case DESCRIPTION_COLOR:
      return { ...state, [descriptionColor]: payload.color };
    case SKILLS_ADD:
      return {
        ...state,
        [skills]: state.skills.concat({
          text: payload.text,
          value: payload.value,
          color: payload.color,
        }),
      };
    case SKILLS_REMOVE:
      return {
        ...state,
        [skills]: removeElementFromArray(state.skills, payload.index),
      };
    case SKILLS_BACKGROUND:
      return { ...state, [skillsBackground]: payload.color };
    case SKILLS_MODIFY:
      return {
        ...state,
        [skills]: addElementAtPositionArray(state.skills, payload.index, {
          text: payload.text,
          value: payload.value,
          color: payload.color,
        }),
      };
    case BACKGROUND:
      return { ...state, [background]: payload.color };
    case MENU_COLOR:
      return { ...state, [menuColor]: payload.color };
    case MENU_BACKGROUND:
      return { ...state, [menuBackground]: payload.color };
    case RESUME_URL:
      return { ...state, [resumeURL]: payload.url };
    case RESUME_BUTTON_TEXT:
      return { ...state, [resumeButtonText]: payload.text };
    case RESUME_BUTTON_BORDER:
      return { ...state, [resumeButtonBorder]: payload.color };
    case RESUME_BUTTON_COLOR:
      return { ...state, [resumeButtonColor]: payload.color };
    case RESUME_BUTTON_BG:
      return { ...state, [resumeButtonBG]: payload.color };
    case RESUME_BUTTON_HOVER_BG:
      return { ...state, [resumeButtonHoverBG]: payload.color };
    case RESUME_BUTTON_HOVER_COLOR:
      return { ...state, [resumeButtonHoverColor]: payload.color };
    case RESUME_HOVER_EFFECT:
      return { ...state, [resumeHoverEnable]: payload.value };
    case SOCIAL_MEDIA_ADD:
      return {
        ...state,
        [mediaHandles]: state.mediaHandles.concat({
          url: payload.url,
          media: payload.media,
          theme: payload.theme,
        }),
      };
    case SOCIAL_MEDIA_REMOVE:
      return {
        ...state,
        [mediaHandles]: removeElementFromArray(state.mediaHandles, payload.index),
      };
    case SOCIAL_MEDIA_UPDATE:
      return {
        ...state,
        [mediaHandles]: addElementAtPositionArray(state.mediaHandles, payload.index, {
          url: payload.url,
          media: payload.media,
          theme: payload.theme,
        }),
      };
    default:
      return state;
  }
};
