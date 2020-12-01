import React from 'react';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { style } from '../../styles/editLanding';
import { workExperienceWriteup } from '../../constants/writeups/index';

const useStyles = makeStyles(style);

const WorkExperience = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl">
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          className={clsx(classes.heading, {
            [classes.responsiveHeading]: window.innerWidth > 750,
          })}
        >
          Work Experience Page
        </Typography>
        <div
          className={clsx(classes.exampleContainer, {
            [classes.responsiveExampleContainer]: window.innerWidth < 750,
          })}
        >
          <div className={classes.textContainer}>
            <Typography
              gutterBottom
              align="center"
              variant={window.innerWidth < 750 ? 'subtitle1' : 'h6'}
              className={clsx(classes.writeUp, {
                [classes.responsiveWriteUp]: window.innerWidth < 750,
              })}
            >
              {workExperienceWriteup}
            </Typography>
            <FormControlLabel
              value="start"
              control={
                <Switch name="enable" className={classes.switchBase} size="medium" />
              }
              label="Enable Page"
              labelPlacement="top"
              className={clsx(classes.labelEnable, {
                [classes.responsiveLabelEnable]: window.innerWidth < 750,
              })}
              classes={{ label: classes.formControl }}
            />
          </div>
          <Typography gutterBottom align="center">
            {/* TODO: Add example of work experience page here */}
            <img
              src="https://bit.ly/3cr31mU"
              alt="Test"
              className={clsx(classes.image, {
                [classes.responsiveImage]: window.innerWidth < 750,
              })}
            />
          </Typography>
        </div>
      </Container>
    </>
  );
};

export { WorkExperience };
