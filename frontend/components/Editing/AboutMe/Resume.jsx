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
  resumeURL as resumeURLFunc,
  resumeButtonText as resumeButtonTextFunc,
  resumeButtonBorder as resumeButtonBorderFunc,
  resumeButtonBackground as resumeButtonBackgroundFunc,
  resumeButtonColor as resumeButtonColorFunc,
  resumeButtonHoverColor as resumeButtonHoverColorFunc,
  resumeButtonHoverBackgroundColor as resumeButtonHoverBackgroundColorFunc,
  resumeHoverEnable as resumeHoverEnableFunc,
} from '../../../actions/about_me_action';
import { ResumeInfo } from '../../../constants/writeups/aboutMe';
import { warningWidth } from '../../../constants/writeups/index';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const Resume = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();

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
              {ResumeInfo.title}
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              {ResumeInfo.help}
            </Typography>
            <TextField
              variant="outlined"
              label={ResumeInfo.field.resumeUrl.label}
              value={resumeURL}
              onChange={(event) => {
                dispatch(resumeURLFunc(event.target.value));
              }}
              fullWidth
              // eslint-disable-next-line max-len
              helperText={ResumeInfo.field.resumeUrl.help}
              className={classes.input}
              required
            />
            <TextField
              variant="outlined"
              label={ResumeInfo.field.resumeButtonText.label}
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
              label={ResumeInfo.field.resumeButtonBorder.label}
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
              label={ResumeInfo.field.resumeButtonColor.label}
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
              label={ResumeInfo.field.resumeButtonBackground.label}
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
              label={ResumeInfo.field.resumeButtonHover.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <Link
              // eslint-disable-next-line max-len
              href={ResumeInfo.hoverEffect.link}
              style={{ marginBottom: '1.3rem' }}
              rel="noreferrer"
              target="_blank"
            >
              {ResumeInfo.hoverEffect.text}
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
                  label={ResumeInfo.field.resumeButtonHoverColor.label}
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
                  label={ResumeInfo.field.resumeButtonHoverBackground.label}
                  labelPlacement="top"
                  classes={{ label: classes.formControl }}
                />
              </>
            )}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={ResumeInfo.image.src}
            alt={ResumeInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: windowWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Resume };
