import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/Editing/form';
import {
  nameText as nameTextFunc,
  nameColor as nameColorFunc,
  nameShouldBold,
} from '../../../actions/introduction_action';
import { NameInfo } from '../../../constants/writeups/introduction';
import { warningWidth } from '../../../constants/writeups/index';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const Name = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const { nameText, nameColor, nameBold } = introductionReducer;
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
              {NameInfo.title}
            </Typography>
            <TextField
              variant="outlined"
              label={NameInfo.field.nameText.label}
              value={nameText}
              onChange={(event) => {
                dispatch(nameTextFunc(event.target.value));
              }}
              fullWidth
              helperText={NameInfo.field.nameText.help}
              className={classes.input}
              required
            />
            <FormControlLabel
              value="top"
              control={
                <Switch
                  name="bold"
                  className={classes.switchBase}
                  size="medium"
                  checked={nameBold}
                  onChange={(event) => {
                    dispatch(nameShouldBold(event.target.checked));
                  }}
                />
              }
              label={NameInfo.field.nameColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={nameColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(nameColorFunc(event.target.value));
                  }}
                />
              }
              label={NameInfo.field.nameColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            {/* TODO: Add example of greeting here */}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={NameInfo.image.src}
            alt={NameInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: windowWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Name };
