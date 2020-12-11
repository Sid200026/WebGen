import {
  ENABLE_PAGE,
  PAGE_HEADLINE,
  PAGE_HEADLINE_COLOR,
  BACKGROUND,
  WORK_EXPERIENCE_ADD,
  WORK_EXPERIENCE_DELETE,
  WORK_EXPERIENCE_MODIFY,
  enable,
  pageHeadline,
  pageHeadlineColor,
  background,
  workExperienceList,
} from '../constants/work_experience_page';
// eslint-disable-next-line max-len
import { workExperience as workExperienceApp } from '../initialState/work_experience_initial';

import workExperienceUser from '../initialState/user.work_experience_initial';

let workExperience;

if (process.env.TYPE === 'app') workExperience = workExperienceApp;
else workExperience = workExperienceUser;

const addElementAtPositionArray = (array, index, payload) => {
  return array
    .slice(0, index)
    .concat(payload)
    .concat(array.slice(index + 1, array.length));
};

const removeElementFromArray = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
};

export const workExperienceReducer = (state = workExperience, { type, payload }) => {
  switch (type) {
    case ENABLE_PAGE:
      return { ...state, [enable]: payload.response };
    case PAGE_HEADLINE:
      return { ...state, [pageHeadline]: payload.text };
    case PAGE_HEADLINE_COLOR:
      return { ...state, [pageHeadlineColor]: payload.color };
    case BACKGROUND:
      return { ...state, [background]: payload.color };
    case WORK_EXPERIENCE_ADD:
      return {
        ...state,
        [workExperienceList]: state.workExperienceList.concat({
          companyName: payload.response.companyName,
          companyNameColor: payload.response.companyNameColor,
          startDate: payload.response.startDate,
          endDate: payload.response.endDate,
          role: payload.response.role,
          subTextColor: payload.response.subTextColor,
          information: payload.response.information,
          informationColor: payload.response.informationColor,
        }),
      };
    case WORK_EXPERIENCE_DELETE:
      return {
        ...state,
        [workExperienceList]: removeElementFromArray(
          state.workExperienceList,
          payload.index,
        ),
      };
    case WORK_EXPERIENCE_MODIFY:
      return {
        ...state,
        [workExperienceList]: addElementAtPositionArray(
          state.workExperienceList,
          payload.index,
          {
            companyName: payload.response.companyName,
            companyNameColor: payload.response.companyNameColor,
            startDate: payload.response.startDate,
            endDate: payload.response.endDate,
            role: payload.response.role,
            subTextColor: payload.response.subTextColor,
            information: payload.response.information,
            informationColor: payload.response.informationColor,
          },
        ),
      };
    default:
      return state;
  }
};
