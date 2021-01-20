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
  resumeURL as resumeURLFunc,
  resumeButtonText as resumeButtonTextFunc,
  resumeButtonBorder as resumeButtonBorderFunc,
  resumeButtonBackground as resumeButtonBackgroundFunc,
  resumeButtonColor as resumeButtonColorFunc,
  resumeButtonHoverColor as resumeButtonHoverColorFunc,
  resumeButtonHoverBackgroundColor as resumeButtonHoverBackgroundColorFunc,
  resumeHoverEnable as resumeHoverEnableFunc,
} from '../../../actions/about_me_action';

const useStyles = makeStyles(style);

const Resume = () => {
  const classes = useStyles();

  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const {
    resumeURL,
    resumeButtonText,
    resumeButtonBorder,
    resumeButtonColor,
    resumeButtonHoverBG,
    resumeButtonHoverColor,
    resumeButtonBG,
    resumeHoverEnable,
  } = aboutMeReducer;
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
              Customize View Resume Button
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              Since we frequenly update our resume, we require you to provide us a link
              to access your resume instead of uploading it so you can update it easily
              in the future
            </Typography>
            <TextField
              variant="outlined"
              label="Resume URL"
              value={resumeURL}
              onChange={(event) => {
                dispatch(resumeURLFunc(event.target.value));
              }}
              fullWidth
              // eslint-disable-next-line max-len
              helperText="Upload your resume in Google Drive, Apple Cloud etc and add the link here"
              className={classes.input}
              required
            />
            <TextField
              variant="outlined"
              label="Resume Button Text"
              value={resumeButtonText}
              onChange={(event) => {
                dispatch(resumeButtonTextFunc(event.target.value));
              }}
              fullWidth
              className={classes.input}
              required
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={resumeButtonBorder}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(resumeButtonBorderFunc(event.target.value));
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
                  value={resumeButtonColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(resumeButtonColorFunc(event.target.value));
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
                <input
                  type="color"
                  list="true"
                  value={resumeButtonBG}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(resumeButtonBackgroundFunc(event.target.value));
                  }}
                />
              }
              label="Background of the button"
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
                  checked={resumeHoverEnable}
                  onChange={(event) => {
                    dispatch(resumeHoverEnableFunc(event.target.checked));
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
            {resumeHoverEnable && (
              <>
                <FormControlLabel
                  value="top"
                  control={
                    <input
                      type="color"
                      list="true"
                      value={resumeButtonHoverColor}
                      style={{
                        width: '8rem',
                        height: '2rem',
                        marginTop: '5px',
                      }}
                      onChange={(event) => {
                        dispatch(resumeButtonHoverColorFunc(event.target.value));
                      }}
                    />
                  }
                  label="Color of the button text on hover"
                  labelPlacement="top"
                  classes={{ label: classes.formControl }}
                />
                <FormControlLabel
                  value="top"
                  control={
                    <input
                      type="color"
                      list="true"
                      value={resumeButtonHoverBG}
                      style={{
                        width: '8rem',
                        height: '2rem',
                        marginTop: '5px',
                      }}
                      onChange={(event) => {
                        dispatch(
                          resumeButtonHoverBackgroundColorFunc(event.target.value),
                        );
                      }}
                    />
                  }
                  label="Background of the button on hover"
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

export { Resume };
