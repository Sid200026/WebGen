/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/Editing/form';
import {
  profilePic as profilePicFunc,
  profilePicRemove as profilePicRemoveFunc,
} from '../../../actions/about_me_action';
import '../../../styles/Editing/Dropzone.scss';
import { checkImage } from '../../../utils/imageExists';
import { ProfilePictureInfo } from '../../../constants/writeups/aboutMe';
import { warningWidth } from '../../../constants/writeups/index';
import { FileUpload } from '../FileUpload.jsx';

const useStyles = makeStyles(style);

const ProfilePicture = () => {
  const classes = useStyles();

  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const { profile } = aboutMeReducer;
  const dispatch = useDispatch();

  const deleteImage = () => {
    dispatch(profilePicRemoveFunc());
  };
  useEffect(() => {
    if (profile) {
      checkImage(profile.url, deleteImage);
    }
  }, []);

  return (
    <>
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
            <Typography align="center" variant="h6" style={{ marginBottom: '0.6rem' }}>
              {ProfilePictureInfo.title}
            </Typography>
            <p style={{ margin: '16px 0px' }}>
              {ProfilePictureInfo.field.profilePicture.label}
            </p>
            <FileUpload
              callback={(url, fileName) => dispatch(profilePicFunc(url, fileName))}
            />
            {Object.keys(profile).length !== 0 && profile.constructor === Object && (
              <List className={classes.list} dense>
                <ListItem divider>
                  <ListItemAvatar>
                    <Avatar alt={profile.name} src={profile.url} />
                  </ListItemAvatar>
                  <ListItemText primary={profile.name} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteImage()}
                    >
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            )}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={ProfilePictureInfo.image.src}
            alt={ProfilePictureInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { ProfilePicture };
