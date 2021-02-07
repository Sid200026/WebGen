import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  BACKGROUND,
  RESET,
  CONTACT_LOAD,
  FOOTER_BORDER,
  FOOTER_COLOR,
  FOOTER_TEXT,
  FOOTER_BACKGROUND,
  FORMSPREE_LINK,
  FORM_BACKGROUND,
  FORM_COLOR,
} from '../constants/contact_page';

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

export const footerColor = (color) => ({
  type: FOOTER_COLOR,
  payload: { color },
});

export const footerBorder = (color) => ({
  type: FOOTER_BORDER,
  payload: { color },
});

export const footerText = (text) => ({
  type: FOOTER_TEXT,
  payload: { text },
});

export const footerBackground = (color) => ({
  type: FOOTER_BACKGROUND,
  payload: { color },
});

export const formColor = (color) => ({
  type: FORM_COLOR,
  payload: { color },
});

export const formBackground = (color) => ({
  type: FORM_BACKGROUND,
  payload: { color },
});

export const formspreeLink = (link) => ({
  type: FORMSPREE_LINK,
  payload: { link },
});

export const reset = () => ({
  type: RESET,
  payload: {},
});

export const load = (data) => ({
  type: CONTACT_LOAD,
  payload: { data },
});
