import { LOAD_DEFAULT_THEME, RESET_DEFAULT_THEME } from '../constants/default_theme';
import { defaultTheme } from '../initialState/default_theme_initial';

export const defaultThemeReducer = (state = defaultTheme, { type, payload }) => {
  switch (type) {
    case RESET_DEFAULT_THEME:
      return defaultTheme;
    case LOAD_DEFAULT_THEME:
      return payload.data;
    default:
      return state;
  }
};
