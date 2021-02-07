import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  BACKGROUND,
  RESET,
  ACHIEVEMENT_LOAD,
  ACHIEVEMENT_CARD_COLOR,
  ACHIEVEMENT_DESCRIPTION_COLOR,
  ACHIEVEMENT_TITLE_COLOR,
  ACHIEVEMENT_VIEW_BUTTON_BORDER,
  ACHIEVEMENT_VIEW_BUTTON_COLOR,
  ACHIEVEMENT_ADD,
  ACHIEVEMENT_BATCH_REMOVE,
  ACHIEVEMENT_EDIT,
  ACHIEVEMENT_REMOVE,
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
  achievementCardColor,
  achievementDescriptionColor,
  achievementTitleColor,
  achievementViewBtnBorder,
  achievementViewBtnColor,
  achievements,
} from '../constants/achievements_page';
// eslint-disable-next-line max-len
import { achievement as achievementApp } from '../initialState/achievement_initial';

import achievementUser from '../initialState/user.achievement_initial';

let achievement;

if (process.env.TYPE === 'app') achievement = achievementApp;
else achievement = achievementUser;

const addElementAtPositionArray = (array, index, payload) => {
  return array
    .slice(0, index)
    .concat(payload)
    .concat(array.slice(index + 1, array.length));
};

const removeElementFromArray = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
};

export const achievementReducer = (state = achievement, { type, payload }) => {
  switch (type) {
    case ENABLE_PAGE:
      return { ...state, [enable]: payload.response };
    case PAGE_HEADLINE:
      return { ...state, [pageHeadline]: payload.text };
    case PAGE_HEADLINE_COLOR:
      return { ...state, [pageHeadlineColor]: payload.color };
    case BACKGROUND:
      return { ...state, [background]: payload.color };

    case ACHIEVEMENT_CARD_COLOR:
      return { ...state, [achievementCardColor]: payload.color };
    case ACHIEVEMENT_DESCRIPTION_COLOR:
      return { ...state, [achievementDescriptionColor]: payload.color };
    case ACHIEVEMENT_TITLE_COLOR:
      return { ...state, [achievementTitleColor]: payload.color };
    case ACHIEVEMENT_VIEW_BUTTON_COLOR:
      return { ...state, [achievementViewBtnColor]: payload.color };
    case ACHIEVEMENT_VIEW_BUTTON_BORDER:
      return { ...state, [achievementViewBtnBorder]: payload.color };

    case ACHIEVEMENT_ADD:
      return {
        ...state,
        [achievements]: state.achievements.concat({
          achievementTitle: payload.response.achievementTitle,
          achievementImage: payload.response.achievementImage,
          achievementCaption: payload.response.achievementCaption,
          achievementDescription: payload.response.achievementDescription,
          achievementLink: payload.response.achievementLink,
        }),
      };
    case ACHIEVEMENT_EDIT:
      return {
        ...state,
        [achievements]: addElementAtPositionArray(state.achievements, payload.index, {
          achievementTitle: payload.response.achievementTitle,
          achievementImage: payload.response.achievementImage,
          achievementCaption: payload.response.achievementCaption,
          achievementDescription: payload.response.achievementDescription,
          achievementLink: payload.response.achievementLink,
        }),
      };
    case ACHIEVEMENT_REMOVE:
      return {
        ...state,
        [achievements]: removeElementFromArray(state.achievements, payload.index),
      };

    case ACHIEVEMENT_BATCH_REMOVE: {
      const arrayIndex = payload.arr;
      let firstPointer = 0;
      const allAchievements = [];
      state.achievements.forEach((Achievement, statePointer) => {
        if (statePointer === arrayIndex[firstPointer]) {
          firstPointer += 1;
        } else {
          allAchievements.push(Achievement);
        }
      });
      return {
        ...state,
        [achievements]: allAchievements,
      };
    }

    case RESET:
      return achievement;
    case ACHIEVEMENT_LOAD:
      return payload.data;
    default:
      return state;
  }
};
