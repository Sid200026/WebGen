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
import { style } from '../../../styles/Editing/form';
import {
  buttonText as buttonTextFunc,
  buttonBorder as buttonBorderFunc,
  buttonColor as buttonColorFunc,
  buttonHoverBG as buttonHoverBGFunc,
  buttonHoverColor as buttonHoverColorFunc,
  buttonHoverEffect,
} from '../../../actions/introduction_action';
import { ViewProfileInfo } from '../../../constants/writeups/introduction';
import { warningWidth } from '../../../constants/writeups/index';

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
          [classes.responsiveExampleContainer]: window.innerWidth < warningWidth,
        })}
      >
        <div className={classes.cardContainer}>
          <Card
            className={clsx(classes.cardClass, {
              [classes.responsiveCardClass]: window.innerWidth < warningWidth,
            })}
          >
            <Typography align="center" variant="h6" style={{ marginBottom: '1rem' }}>
              {ViewProfileInfo.title}
            </Typography>
            <TextField
              variant="outlined"
              label={ViewProfileInfo.field.buttonText.label}
              value={buttonText}
              onChange={(event) => {
                dispatch(buttonTextFunc(event.target.value));
              }}
              fullWidth
              helperText={ViewProfileInfo.field.buttonText.help}
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
              label={ViewProfileInfo.field.buttonBorder.label}
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
              label={ViewProfileInfo.field.buttonColor.label}
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
              label={ViewProfileInfo.field.buttonHover.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <Link
              // eslint-disable-next-line max-len
              href={ViewProfileInfo.hoverEffect.link}
              style={{ marginBottom: '1.3rem' }}
              rel="noreferrer"
              target="_blank"
            >
              {ViewProfileInfo.hoverEffect.text}
            </Link>
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
                  label={ViewProfileInfo.field.buttonHoverBackground.label}
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
                  label={ViewProfileInfo.field.buttonHoverColor.label}
                  labelPlacement="top"
                  classes={{ label: classes.formControl }}
                />
              </>
            )}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={ViewProfileInfo.image.src}
            alt={ViewProfileInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { ViewProfile };
