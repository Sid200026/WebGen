import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  buttonText as buttonTextFunc,
  buttonBorder as buttonBorderFunc,
  buttonColor as buttonColorFunc,
  buttonHoverBG as buttonHoverBGFunc,
  buttonHoverColor as buttonHoverColorFunc,
  buttonHoverEffect,
} from '../../../actions/introduction_action';

const useStyles = makeStyles(style);

const ViewProfile = () => {
  const classes = useStyles();

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const {
    buttonText,
    buttonBorder,
    buttonColor,
    hoverEffect,
    buttonHoverBG,
    buttonHoverColor,
  } = introductionReducer;
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
              Customize View Profile Button
            </Typography>
            <TextField
              variant="outlined"
              label="Button Text"
              value={buttonText}
              onChange={(event) => {
                dispatch(buttonTextFunc(event.target.value));
              }}
              fullWidth="For Eg. Visit My Profile"
              className={classes.input}
              required
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={buttonBorder}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(buttonBorderFunc(event.target.value));
                  }}
                />
              }
              label="Color of the border"
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={buttonColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(buttonColorFunc(event.target.value));
                  }}
                />
              }
              label="Color of the text"
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <Switch
                  name="bold"
                  className={classes.switchBase}
                  size="medium"
                  checked={hoverEffect}
                  onChange={(event) => {
                    dispatch(buttonHoverEffect(event.target.checked));
                  }}
                />
              }
              label="Enable hover effects?"
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <Link
              // eslint-disable-next-line max-len
              href="https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_hover"
              style={{ marginBottom: '1.3rem' }}
              rel="noreferrer"
              target="_blank"
            >
              View an Example
            </Link>{' '}
            {hoverEffect && (
              <>
                <FormControlLabel
                  value="top"
                  control={
                    <input
                      type="color"
                      list="true"
                      value={buttonHoverBG}
                      style={{
                        width: '8rem',
                        height: '2rem',
                        marginTop: '5px',
                      }}
                      onChange={(event) => {
                        dispatch(buttonHoverBGFunc(event.target.value));
                      }}
                    />
                  }
                  label="Background of the button when hovered"
                  labelPlacement="top"
                  classes={{ label: classes.formControl }}
                />
                <FormControlLabel
                  value="top"
                  control={
                    <input
                      type="color"
                      list="true"
                      value={buttonHoverColor}
                      style={{
                        width: '8rem',
                        height: '2rem',
                        marginTop: '5px',
                      }}
                      onChange={(event) => {
                        dispatch(buttonHoverColorFunc(event.target.value));
                      }}
                    />
                  }
                  label="Color of the button text when hovered"
                  labelPlacement="top"
                  classes={{ label: classes.formControl }}
                />
              </>
            )}
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

export { ViewProfile };
