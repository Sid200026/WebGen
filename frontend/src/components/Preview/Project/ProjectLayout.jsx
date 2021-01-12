import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { style } from '../../../styles/project_preview';

const useStyles = makeStyles(style);

const ProjectLayout = () => {
  const classes = useStyles();
  const projectReducer = useSelector((state) => state.projectReducer);
  const { background, pageHeadline, pageHeadlineColor } = projectReducer;

  return (
    <>
      <div className="project__container" />
      <div style={{ background }} className={classes.projectLayout}>
        <Typography
          style={{ color: pageHeadlineColor }}
          className={clsx(classes.pageHeadline, {
            [classes.responsivePageHeadline]: window.innerWidth < 750,
          })}
        >
          {pageHeadline}
        </Typography>
      </div>
    </>
  );
};

export { ProjectLayout };
