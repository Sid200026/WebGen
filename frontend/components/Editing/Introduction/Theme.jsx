import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { generateMenuItems, getTheme } from '../../ParticleThemes/index';
import { style } from '../../../styles/Editing/form';
// eslint-disable-next-line max-len
import {
  particleJSTheme as particleJSThemeFunc,
  particleJSBackground as particleJSBackgroundFunc,
  particleJSEntity as particleJSEntityFunc,
} from '../../../actions/introduction_action';
import { ThemeInfo } from '../../../constants/writeups/introduction';
import { warningWidth } from '../../../constants/writeups/index';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const Theme = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const {
    particleTheme,
    particleThemeBackgroundColor,
    particleThemeEntityColor,
  } = introductionReducer;
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
              {ThemeInfo.title}
            </Typography>
            <InputLabel id="intro-page-theme">{ThemeInfo.field.theme.label}</InputLabel>
            <Select
              labelId="intro-page-theme"
              id="intro-page-theme-id"
              variant="outlined"
              label={ThemeInfo.field.theme.label}
              value={particleTheme}
              className={classes.select}
              onChange={(event) => {
                dispatch(particleJSThemeFunc(event.target.value));
              }}
            >
              {generateMenuItems()}
            </Select>
            {particleTheme && (
              <>
                <FormControlLabel
                  value="top"
                  control={
                    <input
                      type="color"
                      list="true"
                      value={particleThemeBackgroundColor}
                      style={{
                        width: '8rem',
                        height: '2rem',
                        marginTop: '5px',
                      }}
                      onChange={(event) => {
                        dispatch(particleJSBackgroundFunc(event.target.value));
                      }}
                    />
                  }
                  label={ThemeInfo.field.background.label}
                  labelPlacement="top"
                  classes={{ label: classes.formControl }}
                />
                <FormControlLabel
                  value="top"
                  control={
                    <input
                      type="color"
                      list="true"
                      value={particleThemeEntityColor}
                      style={{
                        width: '8rem',
                        height: '2rem',
                        marginTop: '5px',
                      }}
                      onChange={(event) => {
                        dispatch(particleJSEntityFunc(event.target.value));
                      }}
                    />
                  }
                  label={ThemeInfo.field.entity.label}
                  labelPlacement="top"
                  classes={{ label: classes.formControl }}
                />
              </>
            )}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <div
            className={clsx(
              classes.image,
              {
                [classes.responsiveImage]: windowWidth < warningWidth,
              },
              classes.particle,
            )}
          >
            {particleTheme &&
              particleThemeBackgroundColor &&
              particleThemeEntityColor &&
              getTheme(
                particleTheme,
                particleThemeBackgroundColor,
                particleThemeEntityColor,
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export { Theme };
