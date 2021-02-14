import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/Editing/form';
import {
  projectCardColor as projectCardColorFunc,
  projectDescriptionColor as projectDescriptionColorFunc,
  projectTitleColor as projectTitleColorFunc,
  projectViewBtnBorder as projectViewBtnBorderFunc,
  projectViewBtnColor as projectViewBtnColorFunc,
} from '../../../actions/project_action';
import { warningWidth } from '../../../constants/writeups/index';
import { ProjectCardInfo } from '../../../constants/writeups/project';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const ProjectCard = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();

  const projectReducer = useSelector((state) => state.projectReducer);
  const {
    projectCardColor,
    projectDescriptionColor,
    projectTitleColor,
    projectViewBtnBorder,
    projectViewBtnColor,
  } = projectReducer;
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={clsx(classes.exampleContainer, {
          [classes.responsiveExampleContainer]: windowWidth < warningWidth,
        })}
      >
        <div className={classes.cardContainer}>
          <Card
            className={clsx(classes.cardClass, {
              [classes.responsiveCardClass]: windowWidth < warningWidth,
            })}
          >
            <Typography align="center" variant="h6" style={{ marginBottom: '1rem' }}>
              {ProjectCardInfo.title}
            </Typography>
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={projectCardColor}
                  onChange={(event) => {
                    dispatch(projectCardColorFunc(event.target.value));
                  }}
                />
              }
              label={ProjectCardInfo.field.projectCardColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={projectTitleColor}
                  onChange={(event) => {
                    dispatch(projectTitleColorFunc(event.target.value));
                  }}
                />
              }
              label={ProjectCardInfo.field.projectTitleColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={projectDescriptionColor}
                  onChange={(event) => {
                    dispatch(projectDescriptionColorFunc(event.target.value));
                  }}
                />
              }
              label={ProjectCardInfo.field.projectDescriptionColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={projectViewBtnColor}
                  onChange={(event) => {
                    dispatch(projectViewBtnColorFunc(event.target.value));
                  }}
                />
              }
              label={ProjectCardInfo.field.projectViewBtnColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={projectViewBtnBorder}
                  onChange={(event) => {
                    dispatch(projectViewBtnBorderFunc(event.target.value));
                  }}
                />
              }
              label={ProjectCardInfo.field.projectViewBtnBorder.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={ProjectCardInfo.image.src}
            alt={ProjectCardInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: windowWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { ProjectCard };
