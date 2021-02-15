/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FileUpload } from '../FileUpload.jsx';
import { style } from '../../../styles/Editing/form';

import {
  achievementAdd as achievementAddFunc,
  achievementBatchDelete as achievementBatchDeleteFunc,
  achievementDelete as achievementDeleteFunc,
  achievementEdit as achievementEditFunc,
} from '../../../actions/achievement_action';

import { warningWidth } from '../../../constants/writeups/index';
import { AchievementInfo } from '../../../constants/writeups/achievement';
import { checkImagePromises } from '../../../utils/imageExists';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const Achievement = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();

  const initialAchievementState = {
    achievementTitle: '',
    achievementImage: {},
    achievementCaption: '',
    achievementDescription: '',
    achievementLink: '',
  };

  const dispatch = useDispatch();
  const achievementReducer = useSelector((state) => state.achievementReducer);
  const { achievements } = achievementReducer;
  const [error, setError] = useState('');
  const [open, setOpen] = useState({ id: -1, status: false });
  const [achievement, setAchievement] = useState(initialAchievementState);
  const [editAchievement, setEditAchievement] = useState(initialAchievementState);

  const handleClickOpen = (index) => {
    setEditAchievement(achievements[index]);
    setOpen({ id: index, status: true });
  };

  const handleClose = () => {
    if (error) setError('');
    setOpen({ id: -1, status: false });
  };

  const addAchievement = () => {
    if (achievement.achievementTitle.length === 0) {
      setError(AchievementInfo.error.emptyAchievementTitle);
      return;
    }
    if (achievement.achievementCaption.length === 0) {
      setError(AchievementInfo.error.emptyAchievementCaption);
      return;
    }
    if (achievement.achievementDescription.length === 0) {
      setError(AchievementInfo.error.emptyAchievementDescription);
      return;
    }
    if (Object.keys(achievement.achievementImage).length === 0) {
      setError(AchievementInfo.error.emptyAchievementImage);
      return;
    }
    dispatch(achievementAddFunc(achievement));
    setAchievement(initialAchievementState);
    setError('');
  };

  const modifyAchievement = () => {
    if (editAchievement.achievementTitle.length === 0) {
      setError(AchievementInfo.error.emptyAchievementTitle);
      return;
    }
    if (editAchievement.achievementCaption.length === 0) {
      setError(AchievementInfo.error.emptyAchievementCaption);
      return;
    }
    if (editAchievement.achievementDescription.length === 0) {
      setError(AchievementInfo.error.emptyAchievementDescription);
      return;
    }
    if (Object.keys(editAchievement.achievementImage).length === 0) {
      setError(AchievementInfo.error.emptyAchievementImage);
      return;
    }
    dispatch(achievementEditFunc(editAchievement, open.id));
    setEditAchievement(editAchievement);
    handleClose();
    setError('');
  };

  const displayAchievementImage = () => {
    if (Object.keys(achievement.achievementImage).length === 0) {
      return null;
    }
    return (
      <ListItem divider>
        <ListItemAvatar>
          <Avatar
            alt={achievement.achievementImage.achievementImageName}
            src={achievement.achievementImage.achievementImageURL}
          />
        </ListItemAvatar>
        <ListItemText
          primary={`${achievement.achievementImage.achievementImageName}`}
        />
      </ListItem>
    );
  };

  const displayEditAchievementImage = () => {
    if (Object.keys(editAchievement.achievementImage).length === 0) {
      return null;
    }
    return (
      <ListItem divider>
        <ListItemAvatar>
          <Avatar
            alt={editAchievement.achievementImage.achievementImageName}
            src={editAchievement.achievementImage.achievementImageURL}
          />
        </ListItemAvatar>
        <ListItemText
          primary={`${editAchievement.achievementImage.achievementImageName}`}
        />
      </ListItem>
    );
  };

  const getAllAchievements = () => {
    return achievements.map((currentAchievement, index) => (
      <ListItem divider key={currentAchievement.achievementTitle}>
        <ListItemAvatar>
          <Avatar
            alt={currentAchievement.achievementImage.achievementImageName}
            src={currentAchievement.achievementImage.achievementImageURL}
          />
        </ListItemAvatar>
        <ListItemText primary={`${currentAchievement.achievementTitle}`} />
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
            onClick={() => dispatch(achievementDeleteFunc(index))}
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  const getModifyDialog = () => (
    <Dialog
      open={open.status}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Modify Achievement</DialogTitle>
      {error && <Alert severity="error">{error}</Alert>}
      <DialogContent>
        <TextField
          variant="outlined"
          label={AchievementInfo.field.achievementTitle.label}
          fullWidth
          className={classes.input}
          required
          value={editAchievement.achievementTitle}
          onChange={(event) =>
            setEditAchievement({
              ...editAchievement,
              achievementTitle: event.target.value,
            })
          }
        />
        <TextField
          variant="outlined"
          label={AchievementInfo.field.achievementCaption.label}
          fullWidth
          helperText={AchievementInfo.field.achievementCaption.help}
          className={classes.input}
          required
          value={editAchievement.achievementCaption}
          onChange={(event) =>
            setEditAchievement({
              ...editAchievement,
              achievementCaption: event.target.value,
            })
          }
        />
        <TextField
          variant="outlined"
          label={AchievementInfo.field.description.label}
          rows={5}
          multiline
          fullWidth
          helperText={AchievementInfo.field.description.help}
          className={classes.input}
          required
          value={editAchievement.achievementDescription}
          onChange={(event) =>
            setEditAchievement({
              ...editAchievement,
              achievementDescription: event.target.value,
            })
          }
        />
        <Typography
          align="center"
          variant="subtitle2"
          color="primary"
          style={{ marginTop: '1.3rem' }}
        >
          {AchievementInfo.field.link.help}
        </Typography>
        <TextField
          variant="outlined"
          label={AchievementInfo.field.link.label}
          fullWidth
          className={classes.input}
          value={editAchievement.achievementLink}
          onChange={(event) =>
            setEditAchievement({
              ...editAchievement,
              achievementLink: event.target.value,
            })
          }
        />
        <p style={{ margin: '16px 0px' }}>
          {AchievementInfo.field.achievementImage.label}
        </p>
        <FileUpload
          callback={(url, fileName) =>
            setEditAchievement({
              ...editAchievement,
              achievementImage: {
                achievementImageURL: url,
                achievementImageName: fileName,
              },
            })
          }
        />
        <List className={classes.list}>{displayEditAchievementImage()}</List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={modifyAchievement} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );

  useEffect(() => {
    const promises = [];
    achievements.forEach((currentAchievement) => {
      promises.push(
        checkImagePromises(currentAchievement.achievementImage.achievementImageURL),
      );
    });
    const indexOfAchievementWithNoImage = [];
    Promise.all(promises)
      .then((responses) => {
        responses.forEach((response, index) => {
          if (!response.success) indexOfAchievementWithNoImage.push(index);
        });
      })
      .catch(() => {})
      .finally(() => {
        if (indexOfAchievementWithNoImage.length !== 0) {
          dispatch(achievementBatchDeleteFunc(indexOfAchievementWithNoImage));
        }
      });
  }, []);

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {getModifyDialog()}
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
              {AchievementInfo.title}
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              {AchievementInfo.help}
            </Typography>
            <TextField
              variant="outlined"
              label={AchievementInfo.field.achievementTitle.label}
              fullWidth
              className={classes.input}
              required
              value={achievement.achievementTitle}
              onChange={(event) =>
                setAchievement({ ...achievement, achievementTitle: event.target.value })
              }
            />
            <TextField
              variant="outlined"
              label={AchievementInfo.field.achievementCaption.label}
              fullWidth
              helperText={AchievementInfo.field.achievementCaption.help}
              className={classes.input}
              required
              value={achievement.achievementCaption}
              onChange={(event) =>
                setAchievement({
                  ...achievement,
                  achievementCaption: event.target.value,
                })
              }
            />
            <TextField
              variant="outlined"
              label={AchievementInfo.field.description.label}
              rows={5}
              multiline
              fullWidth
              helperText={AchievementInfo.field.description.help}
              className={classes.input}
              required
              value={achievement.achievementDescription}
              onChange={(event) =>
                setAchievement({
                  ...achievement,
                  achievementDescription: event.target.value,
                })
              }
            />
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginTop: '1.3rem' }}
            >
              {AchievementInfo.field.link.help}
            </Typography>
            <TextField
              variant="outlined"
              label={AchievementInfo.field.link.label}
              fullWidth
              className={classes.input}
              required
              value={achievement.achievementLink}
              onChange={(event) =>
                setAchievement({ ...achievement, achievementLink: event.target.value })
              }
            />
            <p style={{ margin: '16px 0px' }}>
              {AchievementInfo.field.achievementImage.label}
            </p>
            <FileUpload
              callback={(url, fileName) =>
                setAchievement({
                  ...achievement,
                  achievementImage: {
                    achievementImageURL: url,
                    achievementImageName: fileName,
                  },
                })
              }
            />
            <List className={classes.list}>{displayAchievementImage()}</List>
            <Button
              variant="contained"
              style={{ marginTop: '25px' }}
              onClick={addAchievement}
            >
              Save Achievement
            </Button>
            {/* TODO: Add example of greeting here */}
            {achievements.length > 0 && (
              <>
                <Typography
                  align="left"
                  variant="h6"
                  style={{ marginTop: '25px', textDecoration: 'underline' }}
                >
                  Achievements
                </Typography>
                <List className={classes.list}>{getAllAchievements()}</List>
              </>
            )}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={AchievementInfo.image.src}
            alt={AchievementInfo.image.src}
            className={clsx(classes.image, {
              [classes.responsiveImage]: windowWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Achievement };
