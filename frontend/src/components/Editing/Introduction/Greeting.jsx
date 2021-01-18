import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  greetingText as greetingTextFunc,
  greetingColor as greetingColorFunc,
} from '../../../actions/introduction_action';
import { GreetingInfo } from '../../../constants/writeups/introduction';
import { warningWidth } from '../../../constants/writeups/index';

const useStyles = makeStyles(style);

const Greeting = () => {
  const classes = useStyles();

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const { greetingText, greetingColor } = introductionReducer;
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
              {GreetingInfo.title}
            </Typography>
            <TextField
              variant="outlined"
              label={GreetingInfo.field.greetingText.label}
              value={greetingText}
              onChange={(event) => {
                dispatch(greetingTextFunc(event.target.value));
              }}
              fullWidth
              helperText={GreetingInfo.field.greetingText.help}
              className={classes.input}
              required
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={greetingColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(greetingColorFunc(event.target.value));
                  }}
                />
              }
              label={GreetingInfo.field.greetingColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={GreetingInfo.image.src}
            alt={GreetingInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Greeting };
