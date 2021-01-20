import { LOAD_DEFAULT_THEME, RESET_DEFAULT_THEME } from '../constants/default_theme';

export const reset = () => ({
  type: RESET_DEFAULT_THEME,
  payload: {},
});

export const load = (data) => ({
  type: LOAD_DEFAULT_THEME,
  payload: { data },
});
