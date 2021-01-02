/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';

const useStyles = makeStyles(style);

const OtherProject = () => {
  const classes = useStyles();

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
              Customize Other Project Content
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              Apart from the popular projects, you can include other projects here. All
              the projects here will be displayed in a tabular format.
            </Typography>
            <TextField
              variant="outlined"
              label="Project Title"
              fullWidth
              className={classes.input}
              required
            />
            <TextField
              variant="outlined"
              label="Project Caption"
              fullWidth
              helperText="Few words on the project"
              className={classes.input}
              required
            />
            <TextField
              variant="outlined"
              label="Description"
              rows={5}
              multiline
              fullWidth
              helperText="Describe the project"
              className={classes.input}
              required
            />
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginTop: '1.3rem' }}
            >
              If you don&apos;t provide a project link, the view button won&apos;t be
              displayed for that project
            </Typography>
            <TextField
              variant="outlined"
              label="Project Link"
              fullWidth
              className={classes.input}
              required
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

export { OtherProject };
