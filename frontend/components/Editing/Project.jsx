import React from 'react';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { style } from '../../styles/Editing/editLanding';
import { projectWriteup, warningWidth } from '../../constants/writeups/index';
import { enablePage } from '../../actions/project_action';
import { Layout } from './Project/Layout.jsx';
import { ProjectCard } from './Project/ProjectCard.jsx';
import { PopularProject } from './Project/PopularProject.jsx';
import { OtherProject } from './Project/OtherProject.jsx';
import { ProjectTable } from './Project/ProjectTable.jsx';
import { StepperComp as Stepper } from './Stepper.jsx';
import { useWindowSize } from '../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const getLabels = () => [
  'Page Layout',
  'Project Card',
  'Popular Projects',
  'Project Table',
  'Other Projects',
];

const getContent = () => [
  Layout,
  ProjectCard,
  PopularProject,
  ProjectTable,
  OtherProject,
];

const Project = (props) => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();
  const projectReducer = useSelector((state) => state.projectReducer);
  const { enable } = projectReducer;
  const dispatch = useDispatch();
  const { updateDisplayMode } = props;
  if (!enable)
    return (
      <>
        <Container maxWidth="xl">
          <Typography
            gutterBottom
            variant="h3"
            align="center"
            className={clsx(classes.heading, {
              [classes.responsiveHeading]: windowWidth > warningWidth,
            })}
          >
            Project Page
          </Typography>
          <Typography gutterBottom variant="h6" align="right">
            <Button
              variant="contained"
              color="primary"
              onClick={updateDisplayMode}
              id="editPreviewbtn"
              startIcon={<VisibilityIcon />}
              size="large"
            >
              Preview
            </Button>
          </Typography>
          <div
            className={clsx(classes.exampleContainer, {
              [classes.responsiveExampleContainer]: windowWidth < warningWidth,
            })}
          >
            <div className={classes.textContainer}>
              <Typography
                gutterBottom
                align="center"
                variant={windowWidth < warningWidth ? 'subtitle1' : 'h6'}
                className={clsx(classes.writeUp, {
                  [classes.responsiveWriteUp]: windowWidth < warningWidth,
                })}
              >
                {projectWriteup}
              </Typography>
              <FormControlLabel
                value="start"
                control={
                  <Switch
                    name="enable"
                    className={classes.switchBase}
                    size="medium"
                    checked={enable}
                    onChange={(event) => {
                      dispatch(enablePage(event.target.checked));
                    }}
                  />
                }
                label="Enable Page"
                labelPlacement="top"
                className={clsx(classes.labelEnable, {
                  [classes.responsiveLabelEnable]: windowWidth < warningWidth,
                })}
                classes={{ label: classes.formControl }}
              />
            </div>
            <Typography gutterBottom align="center">
              {/* TODO: Add example of landing page here */}
              <img
                src="/public/images/Project/Project Page.png"
                alt="Test"
                className={clsx(classes.image, {
                  [classes.responsiveImage]: windowWidth < warningWidth,
                })}
              />
            </Typography>
          </div>
        </Container>
      </>
    );
  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        className={clsx(classes.heading, {
          [classes.responsiveHeading]: windowWidth > warningWidth,
        })}
      >
        Project Page
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <FormControlLabel
            value="start"
            control={
              <Switch
                name="enable"
                className={classes.switchBase}
                size="medium"
                checked={enable}
                onChange={(event) => {
                  dispatch(enablePage(event.target.checked));
                }}
              />
            }
            label="Enable Page"
            labelPlacement="top"
            className={clsx(classes.labelForm, {
              [classes.responsiveLabelEnable]: windowWidth < warningWidth,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            <Button
              variant="contained"
              color="primary"
              onClick={updateDisplayMode}
              id="editPreviewbtnForm"
              startIcon={<VisibilityIcon />}
              size="large"
            >
              Preview
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Typography
        align="center"
        variant="h5"
        gutterBottom
        className={classes.formHeading}
      >
        Customizable Features of this Page
      </Typography>
      <Typography align="center" className={classes.warning} variant="subtitle1">
        PS: If you don&apos;t want to render a component, simply leave the asterisk
        marked field as blank.
      </Typography>
      <Stepper steps={getLabels()} contentList={getContent()} />
    </>
  );
};

Project.propTypes = {
  updateDisplayMode: PropTypes.func.isRequired,
};

export { Project };
