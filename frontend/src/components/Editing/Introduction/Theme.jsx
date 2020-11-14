import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { generateMenuItems, getTheme } from '../../ParticleThemes/index';
import { style } from '../../../styles/form';
// eslint-disable-next-line max-len
import { particleJSTheme as particleJSThemeFunc } from '../../../actions/introduction_action';

const useStyles = makeStyles(style);

const Theme = () => {
  const classes = useStyles();

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const { particleTheme } = introductionReducer;
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
              Customize Theme
            </Typography>
            <InputLabel id="intro-page-theme">Introduction Page Theme</InputLabel>
            <Select
              labelId="intro-page-theme"
              id="intro-page-theme-id"
              variant="outlined"
              label="Introduction Page Theme"
              value={particleTheme}
              helperText="Choose a theme"
              className={classes.select}
              onChange={(event) => {
                dispatch(particleJSThemeFunc(event.target.value));
              }}
            >
              {generateMenuItems()}
            </Select>
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <div
            className={clsx(
              classes.image,
              {
                [classes.responsiveImage]: window.innerWidth < 750,
              },
              classes.particle,
            )}
          >
            {getTheme(particleTheme)}
          </div>
        </div>
      </div>
    </>
  );
};

export { Theme };
