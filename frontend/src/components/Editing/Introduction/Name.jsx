import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  nameText as nameTextFunc,
  nameColor as nameColorFunc,
  nameShouldBold,
} from '../../../actions/introduction_action';

const useStyles = makeStyles(style);

const Name = () => {
  const classes = useStyles();

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const { nameText, nameColor, nameBold } = introductionReducer;
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
            <Typography align="center" variant="h6" style={{ marginBottom: '1.3rem' }}>
              Customize Name Details
            </Typography>
            <TextField
              variant="outlined"
              label="Name"
              value={nameText}
              onChange={(event) => {
                dispatch(nameTextFunc(event.target.value));
              }}
              fullWidth
              helperText="For Eg. John Doe"
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
              label="Should the text be in bold ?"
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
              label="Color of the text"
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
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

export { Name };
