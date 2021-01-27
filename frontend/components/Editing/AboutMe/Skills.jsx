import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
import { style } from '../../../styles/Editing/form';
import {
  skillsAdd as skillsAddFunc,
  skillsRemove as skillsRemoveFunc,
  skillsBackground as skillsBackgroundFunc,
  skillsModify as skillsModifyFunc,
} from '../../../actions/about_me_action';
import '../../../styles/Editing/editForm.scss';
import { SkillInfo } from '../../../constants/writeups/aboutMe';
import { warningWidth } from '../../../constants/writeups/index';

const useStyles = makeStyles(style);

const Skills = () => {
  const [open, setOpen] = useState({ id: -1, status: false });

  const classes = useStyles();
  const [errorMessage, setError] = useState('');

  const defaultThemeReducer = useSelector((state) => state.defaultThemeReducer);
  const { skillColor: defaultSkillColor } = defaultThemeReducer;

  const [skillColor, setSkillColor] = useState(defaultSkillColor);
  const [skillModifyColor, setSkillModifyColor] = useState(defaultSkillColor);
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
        setError(SkillInfo.error.emptySkill);
      } else if (colorElement.value.length === 0) {
        setError(SkillInfo.error.emptySkill);
      }
      return;
    }
    if (numberValueElement > 100 || numberValueElement < 0) {
      setError(SkillInfo.error.invalidSkillScore);
      return;
    }
    dispatch(
      skillsModifyFunc(element.value, numberValueElement, colorElement.value, id),
    );
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
        setError(SkillInfo.error.emptySkill);
      } else if (colorElement.value.length === 0) {
        setError(SkillInfo.error.emptySkill);
      }
      return;
    }
    if (numberValueElement > 100 || numberValueElement < 0) {
      setError(SkillInfo.error.invalidSkillScore);
      return;
    }
    dispatch(skillsAddFunc(element.value, numberValueElement, colorElement.value));
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
            label={SkillInfo.field.skillText.label}
            fullWidth
            defaultValue={skills[open.id] ? skills[open.id].text : ''}
            helperText={SkillInfo.field.skillText.help}
            className={classes.input}
            required
          />
          <TextField
            id="modifyskillValue"
            variant="outlined"
            label={SkillInfo.field.skillScore.label}
            fullWidth
            defaultValue={skills[open.id] ? skills[open.id].value : 0}
            helperText={SkillInfo.field.skillScore.help}
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
            label={SkillInfo.field.skillBarColor.label}
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
              {SkillInfo.title}
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
              label={SkillInfo.field.background.label}
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
              label={SkillInfo.field.skillText.label}
              fullWidth
              helperText={SkillInfo.field.skillText.help}
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
              label={SkillInfo.field.skillScore.label}
              fullWidth
              helperText={SkillInfo.field.skillScore.help}
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
              label={SkillInfo.field.skillBarColor.label}
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
            src={SkillInfo.image.src}
            alt={SkillInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Skills };
