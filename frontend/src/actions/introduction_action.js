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
} from '../constants/introduction_page';

export const greetingTest = (text) => ({
  type: GREETING_TEXT,
  payload: { text },
});

export const greetingColor = (color) => ({
  type: GREETING_COLOR,
  payload: { color },
});

export const nameText = (text) => ({
  type: NAME_TEXT,
  payload: { text },
});

export const nameColor = (color) => ({
  type: NAME_COLOR,
  payload: { color },
});

export const nameShouldBold = (shouldBold) => ({
  type: NAME_SHOULD_BOLD,
  payload: { shouldBold },
});

export const specialisationTextAdd = (text) => ({
  type: SPECIALISATION_TEXT_ADD,
  payload: { text },
});

export const specialisationTextRemove = (index) => ({
  type: SPECIALISATION_TEXT_REMOVE,
  payload: { index },
});

export const specialisationColor = (color) => ({
  type: SPECIALISATION_COLOR,
  payload: { color },
});

export const particleJSTheme = (theme) => ({
  type: PARTICLE_JS_THEME,
  payload: { theme },
});

export const buttonText = (text) => ({
  type: BUTTON_TEXT,
  payload: { text },
});

export const buttonBorder = (border) => ({
  type: BUTTON_BORDER,
  payload: { border },
});

export const buttonColor = (color) => ({
  type: BUTTON_COLOR,
  payload: { color },
});

export const buttonHoverBG = (color) => ({
  type: BUTTON_HOVER_BG,
  payload: { color },
});

export const buttonHoverColor = (color) => ({
  type: BUTTON_HOVER_COLOR,
  payload: { color },
});

export const font = (fontFamily) => ({
  type: FONT,
  payload: { fontFamily },
});

export const meta = (metaDescription) => ({
  type: META,
  payload: { metaDescription },
});

export const title = (titleTag) => ({
  type: TITLE,
  payload: { titleTag },
});