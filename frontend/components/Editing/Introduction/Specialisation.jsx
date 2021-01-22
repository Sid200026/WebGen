import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/Editing/form';
import {
  specialisationTextAdd,
  specialisationTextRemove,
  specialisationColor as specialisationColorFunc,
} from '../../../actions/introduction_action';
import '../../../styles/Editing/editForm.scss';
import { SpecialisationInfo } from '../../../constants/writeups/introduction';
import { warningWidth } from '../../../constants/writeups/index';

const useStyles = makeStyles(style);

const Specialisation = () => {
  const classes = useStyles();
  const [errorMessage, setError] = useState('');

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const { specialisationText, specialisationColor } = introductionReducer;
  const dispatch = useDispatch();

  const saveSpecialisation = () => {
    const element = document.getElementById('special');
    if (element.value.length === 0) {
      if (element.value.length === 0) {
        setError('Specialisation text cannot be empty');
      }
      return;
    }
    dispatch(specialisationTextAdd(element.value));
    element.value = '';
    setError('');
  };

  const getSpecialisations = () =>
    specialisationText.map((ele, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem divider key={index}>
        <ListItemText primary={ele} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              dispatch(specialisationTextRemove(index));
            }}
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));

  return (
    <>
      {errorMessage.length !== 0 && <Alert severity="error">{errorMessage}</Alert>}
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
              {SpecialisationInfo.title}
            </Typography>
            <Typography align="center" variant="subtitle2" color="secondary">
              {SpecialisationInfo.help}
            </Typography>
            <Link
              href={SpecialisationInfo.typingEffect.link}
              style={{ marginBottom: '1rem' }}
              rel="noreferrer"
              target="_blank"
            >
              {SpecialisationInfo.typingEffect.text}
            </Link>
            <TextField
              id="special"
              variant="outlined"
              label={SpecialisationInfo.field.specialisationText.label}
              fullWidth
              helperText={SpecialisationInfo.field.specialisationText.help}
              className={classes.input}
              required
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  saveSpecialisation();
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" id="btn" onClick={saveSpecialisation}>
                    <SaveIcon color="primary" fontSize="large" />
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={specialisationColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(specialisationColorFunc(event.target.value));
                  }}
                />
              }
              label={SpecialisationInfo.field.specialisationColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <Typography
              align="left"
              variant="h6"
              style={{ marginTop: '25px', textDecoration: 'underline' }}
            >
              Specialisations
            </Typography>
            <List className={classes.list}>{getSpecialisations()}</List>
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={SpecialisationInfo.image.src}
            alt={SpecialisationInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Specialisation };
