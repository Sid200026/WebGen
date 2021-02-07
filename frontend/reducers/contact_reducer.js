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
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
  footerBorder,
  footerColor,
  footerText,
  footerBackground,
  formBackground,
  formColor,
  formSpreeLink,
} from '../constants/contact_page';
// eslint-disable-next-line max-len
import { contact as contactApp } from '../initialState/contact_initial';

import contactUser from '../initialState/user.contact_initial';

let contact;

if (process.env.TYPE === 'app') contact = contactApp;
else contact = contactUser;

export const contactReducer = (state = contact, { type, payload }) => {
  switch (type) {
    case ENABLE_PAGE:
      return { ...state, [enable]: payload.response };
    case PAGE_HEADLINE:
      return { ...state, [pageHeadline]: payload.text };
    case PAGE_HEADLINE_COLOR:
      return { ...state, [pageHeadlineColor]: payload.color };
    case BACKGROUND:
      return { ...state, [background]: payload.color };
    case FOOTER_BORDER:
      return { ...state, [footerBorder]: payload.color };
    case FOOTER_COLOR:
      return { ...state, [footerColor]: payload.color };
    case FOOTER_TEXT:
      return { ...state, [footerText]: payload.text };
    case FOOTER_BACKGROUND:
      return { ...state, [footerBackground]: payload.color };
    case FORM_COLOR:
      return { ...state, [formColor]: payload.color };
    case FORM_BACKGROUND:
      return { ...state, [formBackground]: payload.color };
    case FORMSPREE_LINK:
      return { ...state, [formSpreeLink]: payload.link };
    case RESET:
      return contact;
    case CONTACT_LOAD:
      return payload.data;
    default:
      return state;
  }
};
