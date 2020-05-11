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
  BUTTON_TEXT,
  BUTTON_BORDER,
  BUTTON_COLOR,
  BUTTON_HOVER_BG,
  BUTTON_HOVER_COLOR,
  FONT,
  META,
  TITLE,
  greetingText,
  greetingColor,
  nameText,
  nameColor,
  nameBold,
  specialisationText,
  specialisationColor,
  particleTheme,
  buttonText,
  buttonBorder,
  buttonColor,
  buttonHoverBG,
  buttonHoverColor,
  font,
  metadesc,
  title,
} from '../constants/introduction_page';

import { introduction } from '../initialState/introduction_initial';

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
    default:
      return state;
  }
};
