import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  projectCardColor as projectCardColorFunc,
  projectDescriptionColor as projectDescriptionColorFunc,
  projectTitleColor as projectTitleColorFunc,
  projectViewBtnBg as projectViewBtnBgFunc,
  projectViewBtnColor as projectViewBtnColorFunc,
} from '../../../actions/project_action';

const useStyles = makeStyles(style);

const ProjectCard = () => {
  const classes = useStyles();

  const projectReducer = useSelector((state) => state.projectReducer);
  const {
    projectCardColor,
    projectDescriptionColor,
    projectTitleColor,
    projectViewBtnBg,
    projectViewBtnColor,
  } = projectReducer;
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={clsx(classes.exampleContainer, {
          [classes.responsiveExampleContainer]: window.innerWidth < 750,
        })}
      >
        <div className={classes.cardContainer}>
          <Card
            className={clsx(classes.cardClass, {
              [classes.responsiveCardClass]: window.innerWidth < 750,
            })}
          >
            <Typography align="center" variant="h6" style={{ marginBottom: '1rem' }}>
              Customize Project Cards
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
              label="Project Card Color"
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
              label="Project Title Color"
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
              label="Project Description Color"
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
              label="Project View Button Color"
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
                  value={projectViewBtnBg}
                  onChange={(event) => {
                    dispatch(projectViewBtnBgFunc(event.target.value));
                  }}
                />
              }
              label="Project View Button Background"
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            {/* TODO: Add example of greeting here */}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src="https://bit.ly/3cr31mU"
            alt="Test"
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < 750,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { ProjectCard };
