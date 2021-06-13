import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/Editing/form';
import {
  background as backgroundFunc,
  menuBackground as menuBackgroundFunc,
  menuColor as menuColorFunc,
  pageHeadline as pageHeadlineFunc,
  pageHeadlineColor as pageHeadlineColorFunc,
} from '../../../actions/about_me_action';
import { LayoutInfo } from '../../../constants/writeups/aboutMe';
import { warningWidth } from '../../../constants/writeups/index';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const Layout = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();

  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const { background, menuBackground, menuColor, pageHeadline, pageHeadlineColor } =
    aboutMeReducer;
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
              {LayoutInfo.title}
            </Typography>
            <TextField
              variant="outlined"
              label={LayoutInfo.field.pageTitle.label}
              value={pageHeadline}
              onChange={(event) => {
                dispatch(pageHeadlineFunc(event.target.value));
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
                  value={pageHeadlineColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(pageHeadlineColorFunc(event.target.value));
                  }}
                />
              }
              label={LayoutInfo.field.pageTitleColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={background}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(backgroundFunc(event.target.value));
                  }}
                />
              }
              label={LayoutInfo.field.background.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={menuColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(menuColorFunc(event.target.value));
                  }}
                />
              }
              label={LayoutInfo.field.menuColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={menuBackground}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(menuBackgroundFunc(event.target.value));
                  }}
                />
              }
              label={LayoutInfo.field.menuBackground.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            {/* TODO: Add example of greeting here */}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={LayoutInfo.image.src}
            alt={LayoutInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: windowWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Layout };
