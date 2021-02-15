import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/Editing/form';
import {
  achievementCardColor as achievementCardColorFunc,
  achievementDescriptionColor as achievementDescriptionColorFunc,
  achievementTitleColor as achievementTitleColorFunc,
  achievementViewBtnBorder as achievementViewBtnBorderFunc,
  achievementViewBtnColor as achievementViewBtnColorFunc,
} from '../../../actions/achievement_action';
import { warningWidth } from '../../../constants/writeups/index';
import { AchievementCardInfo } from '../../../constants/writeups/achievement';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const AchievementCard = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();

  const achievementReducer = useSelector((state) => state.achievementReducer);
  const {
    achievementCardColor,
    achievementDescriptionColor,
    achievementTitleColor,
    achievementViewBtnBorder,
    achievementViewBtnColor,
  } = achievementReducer;
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
              {AchievementCardInfo.title}
            </Typography>
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={achievementCardColor}
                  onChange={(event) => {
                    dispatch(achievementCardColorFunc(event.target.value));
                  }}
                />
              }
              label={AchievementCardInfo.field.achievementCardColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={achievementTitleColor}
                  onChange={(event) => {
                    dispatch(achievementTitleColorFunc(event.target.value));
                  }}
                />
              }
              label={AchievementCardInfo.field.achievementTitleColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={achievementDescriptionColor}
                  onChange={(event) => {
                    dispatch(achievementDescriptionColorFunc(event.target.value));
                  }}
                />
              }
              label={AchievementCardInfo.field.achievementDescriptionColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={achievementViewBtnColor}
                  onChange={(event) => {
                    dispatch(achievementViewBtnColorFunc(event.target.value));
                  }}
                />
              }
              label={AchievementCardInfo.field.achievementViewBtnColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={achievementViewBtnBorder}
                  onChange={(event) => {
                    dispatch(achievementViewBtnBorderFunc(event.target.value));
                  }}
                />
              }
              label={AchievementCardInfo.field.achievementViewBtnBorder.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={AchievementCardInfo.image.src}
            alt={AchievementCardInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: windowWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { AchievementCard };
