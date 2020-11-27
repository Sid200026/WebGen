import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  skillsAdd as skillsAddFunc,
  skillsRemove as skillsRemoveFunc,
  skillsBackground as skillsBackgroundFunc,
  skillsModify as skillsModifyFunc,
} from '../../../actions/about_me_action';
import '../../../styles/editForm.scss';

const useStyles = makeStyles(style);

const Skills = () => {
  const [open, setOpen] = useState({ id: -1, status: false });

  const classes = useStyles();
  const [errorMessage, setError] = useState('');
  const [skillColor, setSkillColor] = useState('#000000');
  const [skillModifyColor, setSkillModifyColor] = useState('#000000');
  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const { skills, skillsBackground } = aboutMeReducer;
  const dispatch = useDispatch();

  const handleClickOpen = (index) => {
    setOpen({ id: index, status: true });
    setSkillModifyColor(skills[index].color);
  };

  const handleClose = () => {
    setOpen({ id: -1, status: false });
  };

  const modifySkills = () => {
    const { id } = open;
    setOpen({ id: -1, status: false });
    const element = document.getElementById('modifyskill');
    const valueElement = document.getElementById('modifyskillValue');
    const colorElement = document.getElementById('modifycolorElement');
    const numberValueElement = parseInt(valueElement.value, 10);
    if (
      element.value.length === 0 ||
      colorElement.value.length === 0 ||
      valueElement.value.length === 0 ||
      Number.isNaN(numberValueElement)
    ) {
      if (element.value.length === 0) {
        setError('Skill text cannot be empty');
      } else if (colorElement.value.length === 0) {
        setError('Skill color cannot be empty');
      } else {
        setError('Skill score cannot be empty');
      }
      return;
    }
    if (numberValueElement > 100 || numberValueElement < 0) {
      setError('Skill score must be between 0 and 100');
      return;
    }
    if (skills.length === 14) {
      // TODO: Change it to a valid link
      Swal.fire({
        icon: 'error',
        title: 'Looks like you are highly skillful',
        text: "But I'm not. So you can only enter 14 skills at max",
        footer:
          // eslint-disable-next-line max-len
          '<a href="https://github.com/Sid200026/WebGen/blob/master/README.md">Why do I have this issue?</a>',
      });
    } else {
      dispatch(
        skillsModifyFunc(element.value, numberValueElement, colorElement.value, id),
      );
    }
    element.value = '';
    valueElement.value = '';
    setError('');
  };

  const saveSkills = () => {
    const element = document.getElementById('skill');
    const valueElement = document.getElementById('skillValue');
    const colorElement = document.getElementById('colorElement');
    const numberValueElement = parseInt(valueElement.value, 10);
    if (
      element.value.length === 0 ||
      colorElement.value.length === 0 ||
      valueElement.value.length === 0 ||
      Number.isNaN(numberValueElement)
    ) {
      if (element.value.length === 0) {
        setError('Skill text cannot be empty');
      } else if (colorElement.value.length === 0) {
        setError('Skill color cannot be empty');
      } else {
        setError('Skill score cannot be empty');
      }
      return;
    }
    if (numberValueElement > 100 || numberValueElement < 0) {
      setError('Skill score must be between 0 and 100');
      return;
    }
    if (skills.length === 14) {
      // TODO: Change it to a valid link
      Swal.fire({
        icon: 'error',
        title: 'Looks like you are highly skillful',
        text: "But I'm not. So you can only enter 14 skills at max",
        footer:
          // eslint-disable-next-line max-len
          '<a href="https://github.com/Sid200026/WebGen/blob/master/README.md">Why do I have this issue?</a>',
      });
    } else {
      dispatch(skillsAddFunc(element.value, numberValueElement, colorElement.value));
    }
    element.value = '';
    valueElement.value = '';
    setError('');
  };

  const getSkills = () =>
    skills.map((ele, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem divider key={index}>
        <ListItemText primary={`${ele.text} || ${ele.value} / 100`} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleClickOpen(index)}
          >
            <EditIcon color="primary" />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              dispatch(skillsRemoveFunc(index));
            }}
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  return (
    <>
      <Dialog
        open={open.status}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Modify Skills</DialogTitle>
        <DialogContent>
          <TextField
            id="modifyskill"
            variant="outlined"
            label="Skill Text"
            fullWidth
            defaultValue={skills[open.id] ? skills[open.id].text : ''}
            helperText="For Eg. CSS"
            className={classes.input}
            required
          />
          <TextField
            id="modifyskillValue"
            variant="outlined"
            label="Skill Score Out of 100"
            fullWidth
            defaultValue={skills[open.id] ? skills[open.id].value : 0}
            helperText="For Eg. 70"
            className={classes.input}
            required
          />
          <FormControlLabel
            value="top"
            control={
              <input
                id="modifycolorElement"
                type="color"
                list="true"
                style={{
                  width: '8rem',
                  height: '2rem',
                  marginTop: '5px',
                }}
                value={skillModifyColor}
                onChange={(event) => setSkillModifyColor(event.target.value)}
              />
            }
            label="Color of skill bar"
            labelPlacement="top"
            classes={{ label: classes.formControl }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={modifySkills} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {errorMessage.length !== 0 && <Alert severity="error">{errorMessage}</Alert>}
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
              Customize Skills
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
                  value={skillsBackground}
                  onChange={(event) => {
                    dispatch(skillsBackgroundFunc(event.target.value));
                  }}
                />
              }
              label="Background of each skill bar"
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginTop: '1rem' }}
            >
              Customize attribute of each skill
            </Typography>
            <TextField
              id="skill"
              variant="outlined"
              label="Skill Text"
              fullWidth
              helperText="For Eg. CSS"
              className={classes.input}
              required
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  saveSkills();
                }
              }}
            />
            <TextField
              id="skillValue"
              variant="outlined"
              label="Skill Score Out of 100"
              fullWidth
              helperText="For Eg. 70"
              className={classes.input}
              required
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  saveSkills();
                }
              }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  id="colorElement"
                  type="color"
                  list="true"
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  value={skillColor}
                  onChange={(event) => {
                    setSkillColor(event.target.value);
                  }}
                />
              }
              label="Color of skill bar"
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <Button
              variant="contained"
              onClick={saveSkills}
              style={{ marginTop: '25px' }}
            >
              Save Skill
            </Button>
            {skills.length !== 0 && (
              <Typography
                align="left"
                variant="h6"
                style={{ marginTop: '25px', textDecoration: 'underline' }}
              >
                Skills
              </Typography>
            )}
            <List className={classes.list}>{getSkills()}</List>
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

export { Skills };
