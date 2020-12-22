import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AdjustIcon from '@material-ui/icons/Adjust';
import { style } from '../../../styles/work_experience_preview';

const useStyles = makeStyles(style);

const monthMapping = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const WorkExperienceLayout = () => {
  const classes = useStyles();
  const workExperienceReducer = useSelector((state) => state.workExperienceReducer);
  const { background, pageHeadline, pageHeadlineColor } = workExperienceReducer;

  let { workExperienceList } = workExperienceReducer;

  workExperienceList = workExperienceList.sort((first, second) =>
    new Date(second.endDate) === new Date(first.endDate)
      ? new Date(second.startDate) - new Date(first.startDate)
      : new Date(second.endDate) - new Date(first.endDate),
  );

  const getWorkExperience = () =>
    workExperienceList.map((workExperience, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className={classes.workExperienceList} key={index}>
        <Typography
          variant="h6"
          className={classes.workTitle}
          style={{ color: workExperience.companyNameColor }}
        >
          <AdjustIcon className={classes.workTitleIcon} /> {workExperience.companyName}
        </Typography>
        <Typography
          style={{ color: workExperience.subTextColor }}
          variant="subtitle1"
          className={classes.workPlace}
        >
          {workExperience.role} <br />
          {monthMapping[new Date(workExperience.startDate).getMonth() % 12]},{' '}
          {new Date(workExperience.startDate).getFullYear()} -{' '}
          {monthMapping[new Date(workExperience.endDate).getMonth() % 12]},{' '}
          {new Date(workExperience.endDate).getFullYear()}
        </Typography>
        {workExperience.information.map((info, childIndex) => (
          <Typography
            variant="subtitle2"
            // eslint-disable-next-line react/no-array-index-key
            key={childIndex}
            className={clsx(classes.workInfo, {
              [classes.responsiveWorkInfo]: window.innerWidth < 750,
            })}
            style={{ color: workExperience.informationColor }}
          >
            <ArrowRightIcon />
            {info}
          </Typography>
        ))}
      </div>
    ));

  return (
    <>
      <div className="work_experience__container" />
      <div style={{ background }} className={classes.workExperienceLayout}>
        <Typography
          style={{ color: pageHeadlineColor }}
          className={clsx(classes.pageHeadline, {
            [classes.responsivePageHeadline]: window.innerWidth < 750,
          })}
        >
          {pageHeadline}
        </Typography>
        <div
          className={clsx(classes.workExperienceContainer, {
            [classes.responsiveWorkExperienceContainer]: window.innerWidth < 750,
          })}
        >
          {getWorkExperience()}
        </div>
      </div>
    </>
  );
};

export { WorkExperienceLayout };
