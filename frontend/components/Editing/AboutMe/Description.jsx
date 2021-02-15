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
  descriptionText as descriptionTextFunc,
  descriptionColor as descriptionColorFunc,
} from '../../../actions/about_me_action';
import { DescriptionInfo } from '../../../constants/writeups/aboutMe';
import { warningWidth } from '../../../constants/writeups/index';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const Description = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();

  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const { description, descriptionColor } = aboutMeReducer;
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
              {DescriptionInfo.title}
            </Typography>
            <TextField
              variant="outlined"
              label={DescriptionInfo.field.description.label}
              value={description}
              onChange={(event) => {
                dispatch(descriptionTextFunc(event.target.value));
              }}
              rows={5}
              multiline
              fullWidth
              helperText={DescriptionInfo.field.description.help}
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
              label={DescriptionInfo.field.descriptionColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={DescriptionInfo.image.src}
            alt={DescriptionInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: windowWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Description };
