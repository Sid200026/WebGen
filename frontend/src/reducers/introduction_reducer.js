import {
  GREETING_TEXT,
  GREETING_COLOR,
  NAME_TEXT,
  NAME_COLOR,
  NAME_SHOULD_BOLD,
  SPECIALISATION_TEXT_ADD,
  SPECIALISATION_TEXT_REMOVE,
  SPECIALISATION_COLOR,
  PARTICLE_JS_THEME,
  PARTICLE_THEME_BACKGROUND_COLOR,
  PARTICLE_THEME_ENTITY_COLOR,
  BUTTON_TEXT,
  BUTTON_BORDER,
  BUTTON_COLOR,
  BUTTON_HOVER_BG,
  BUTTON_HOVER_COLOR,
  FONT,
  META,
  TITLE,
  ENABLE_PAGE,
  BUTTON_HOVER_EFFECT,
  FAVICON,
  DELETE_FAVICON,
  RESET,
  greetingText,
  greetingColor,
  nameText,
  nameColor,
  nameBold,
  specialisationText,
  specialisationColor,
  particleTheme,
  particleThemeBackgroundColor,
  particleThemeEntityColor,
  buttonText,
  buttonBorder,
  buttonColor,
  buttonHoverBG,
  buttonHoverColor,
  font,
  metadesc,
  title,
  enable,
  hoverEffect,
  favicon,
} from '../constants/introduction_page';
import { introduction as introductionApp } from '../initialState/introduction_initial';
// eslint-disable-next-line max-len
import introductionUser from '../initialState/user.introduction_initial';

let introduction;

if (process.env.TYPE === 'app') introduction = introductionApp;
else introduction = introductionUser;

const removeElementFromArray = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
};

export const introductionReducer = (state = introduction, { type, payload }) => {
  switch (type) {
    case GREETING_TEXT:
      return { ...state, [greetingText]: payload.text };
    case GREETING_COLOR:
      return { ...state, [greetingColor]: payload.color };
    case NAME_TEXT:
      return { ...state, [nameText]: payload.text };
    case NAME_COLOR:
      return { ...state, [nameColor]: payload.color };
    case NAME_SHOULD_BOLD:
      return { ...state, [nameBold]: payload.shouldBold };
    case SPECIALISATION_TEXT_ADD:
      return {
        ...state,
        [specialisationText]: state.specialisationText.concat(payload.text),
      };
    case SPECIALISATION_TEXT_REMOVE:
      return {
        ...state,
        [specialisationText]: removeElementFromArray(
          state.specialisationText,
          payload.index,
        ),
      };
    case SPECIALISATION_COLOR:
      return { ...state, [specialisationColor]: payload.color };
    case PARTICLE_JS_THEME:
      return { ...state, [particleTheme]: payload.theme };
    case PARTICLE_THEME_BACKGROUND_COLOR:
      return { ...state, [particleThemeBackgroundColor]: payload.background };
    case PARTICLE_THEME_ENTITY_COLOR:
      return { ...state, [particleThemeEntityColor]: payload.entity };
    case BUTTON_TEXT:
      return { ...state, [buttonText]: payload.text };
    case BUTTON_BORDER:
      return { ...state, [buttonBorder]: payload.border };
    case BUTTON_COLOR:
      return { ...state, [buttonColor]: payload.color };
    case BUTTON_HOVER_BG:
      return { ...state, [buttonHoverBG]: payload.color };
    case BUTTON_HOVER_COLOR:
      return { ...state, [buttonHoverColor]: payload.color };
    case FONT:
      return { ...state, [font]: payload.fontFamily };
    case META:
      return { ...state, [metadesc]: payload.metaDescription };
    case TITLE:
      return { ...state, [title]: payload.titleTag };
    case ENABLE_PAGE:
      return { ...state, [enable]: payload.response };
    case BUTTON_HOVER_EFFECT:
      return { ...state, [hoverEffect]: payload.response };
    case FAVICON:
      return { ...state, [favicon]: { url: payload.url, name: payload.name } };
    case DELETE_FAVICON:
      return { ...state, [favicon]: payload };
    case RESET:
      return introduction;
    default:
      return state;
  }
};
