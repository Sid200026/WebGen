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
  FAVICON,
  ENABLE_PAGE,
  BUTTON_HOVER_EFFECT,
  DELETE_FAVICON,
} from '../constants/introduction_page';

export const greetingText = (text) => ({
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

export const particleJSBackground = (background) => ({
  type: PARTICLE_THEME_BACKGROUND_COLOR,
  payload: { background },
});

export const particleJSEntity = (entity) => ({
  type: PARTICLE_THEME_ENTITY_COLOR,
  payload: { entity },
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

export const favicon = (url, name) => ({
  type: FAVICON,
  payload: { url, name },
});

export const enablePage = (response) => ({
  type: ENABLE_PAGE,
  payload: { response },
});

export const buttonHoverEffect = (response) => ({
  type: BUTTON_HOVER_EFFECT,
  payload: { response },
});

export const deleteFavicon = () => ({
  type: DELETE_FAVICON,
  payload: {},
});
