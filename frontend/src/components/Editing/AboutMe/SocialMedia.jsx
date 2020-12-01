import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { style } from '../../../styles/form';
import { getMediaName } from '../../../utils/socialMediaDetector';
import {
  socialMediaAdd as socialMediaAddFunc,
  socialMediaRemove as socialMediaRemoveFunc,
  socialMediaModify as socialMediaModifyFunc,
} from '../../../actions/about_me_action';
import '../../../styles/editForm.scss';

const useStyles = makeStyles(style);

const SocialMedia = () => {
  const [open, setOpen] = useState({ id: -1, status: false });

  const classes = useStyles();
  const [errorMessage, setError] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [modifyMediaType, setModifyMediaType] = useState('');
  const [isLight, setIsLight] = useState(true);
  const [isLightModify, setIsLightModify] = useState(true);

  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const { mediaHandles } = aboutMeReducer;
  const dispatch = useDispatch();

  const modifyHandle = () => {
    const element = document.getElementById('modifySpecial');
    if (element.value.length === 0 || modifyMediaType.length === 0) {
      if (element.value.length === 0) {
        setError('Social Media URL cannot be empty');
      } else {
        setError('Social Media Type cannot be empty');
      }
      return;
    }
    dispatch(
      socialMediaModifyFunc(element.value, modifyMediaType, isLightModify, open.id),
    );
    element.value = '';
    setOpen({ id: -1, status: false });
    setError('');
    setModifyMediaType('');
  };

  const saveHandle = () => {
    const element = document.getElementById('special');
    if (element.value.length === 0 || mediaType.length === 0) {
      if (element.value.length === 0) {
        setError('Social Media URL cannot be empty');
      } else {
        setError('Social Media Type cannot be empty');
      }
      return;
    }
    dispatch(socialMediaAddFunc(element.value, mediaType, isLight));
    element.value = '';
    setError('');
    setMediaType('');
  };

  const handleClickOpen = (index) => {
    setOpen({ id: index, status: true });
    setModifyMediaType(mediaHandles[index].media);
    setIsLightModify(mediaHandles[index].theme);
  };

  const handleClose = () => {
    setOpen({ id: -1, status: false });
  };

  const getHandles = () =>
    mediaHandles.map((ele, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem divider key={index}>
        <ListItemText primary={`${ele.media}`} />
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
              dispatch(socialMediaRemoveFunc(index));
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
            id="modifySpecial"
            variant="outlined"
            label="Social Media URL"
            fullWidth
            helperText="For example https://github.com/Sid200026"
            className={classes.input}
            onChange={(event) => {
              const getPossibleName = getMediaName(event.target.value);
              setModifyMediaType(getPossibleName);
            }}
            defaultValue={mediaHandles[open.id] ? mediaHandles[open.id].url : ''}
            required
          />
          <TextField
            id="url"
            variant="outlined"
            label="Social Media Type"
            fullWidth
            helperText="For example GitHub"
            className={classes.input}
            required
            value={modifyMediaType}
            onChange={(event) => setModifyMediaType(event.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isLightModify}
                onChange={(event) => setIsLightModify(event.target.checked)}
                name="isLight"
                color="primary"
              />
            }
            label="Use Light Theme ?"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={modifyHandle} color="primary">
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
              Customize Social Media Handles
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="secondary"
              style={{ marginBottom: '1rem' }}
            >
              Warning : Original theme cannot be used for every logo. In those cases
              please check Use Light Theme
            </Typography>
            <TextField
              id="special"
              variant="outlined"
              label="Social Media URL"
              fullWidth
              helperText="For example https://github.com/Sid200026"
              className={classes.input}
              onChange={(event) => {
                const getPossibleName = getMediaName(event.target.value);
                setMediaType(getPossibleName);
              }}
              required
            />
            <TextField
              id="url"
              variant="outlined"
              label="Social Media Type"
              fullWidth
              helperText="For example GitHub"
              className={classes.input}
              required
              value={mediaType}
              onChange={(event) => setMediaType(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" id="btn" onClick={saveHandle}>
                    <SaveIcon color="primary" fontSize="large" />
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isLight}
                  onChange={(event) => setIsLight(event.target.checked)}
                  name="isLight"
                  color="primary"
                />
              }
              label="Use Light Theme ?"
            />
            {mediaHandles.length !== 0 && (
              <Typography
                align="left"
                variant="h6"
                style={{ marginTop: '25px', textDecoration: 'underline' }}
              >
                Social Media Handles
              </Typography>
            )}
            <List className={classes.list}>{getHandles()}</List>
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

export { SocialMedia };
