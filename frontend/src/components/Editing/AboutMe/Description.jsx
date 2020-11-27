import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  descriptionText as descriptionTextFunc,
  descriptionColor as descriptionColorFunc,
} from '../../../actions/about_me_action';

const useStyles = makeStyles(style);

const Description = () => {
  const classes = useStyles();

  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const { description, descriptionColor } = aboutMeReducer;
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
              Customize Description
            </Typography>
            <TextField
              variant="outlined"
              label="Description"
              value={description}
              onChange={(event) => {
                dispatch(descriptionTextFunc(event.target.value));
              }}
              rows={5}
              multiline
              fullWidth
              helperText="A few short lines about yourself"
              className={classes.input}
              required
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={descriptionColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(descriptionColorFunc(event.target.value));
                  }}
                />
              }
              label="Color of the text"
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

export { Description };
