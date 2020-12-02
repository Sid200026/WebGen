/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Dropzone from 'react-dropzone';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Alert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import Swal from 'sweetalert2';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  profilePic as profilePicFunc,
  profilePicRemove as profilePicRemoveFunc,
} from '../../../actions/about_me_action';
import '../../../styles/Dropzone.scss';
import { checkImage } from '../../../utils/imageExists';
import { generateAPIKey } from '../../../utils/generateAPIKey';

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

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();
      if (acceptedFiles[0].size > 10 * 1024 * 1024) {
        Swal.fire({
          icon: 'error',
          title: `Image too large`,
          text: 'Image size exceeds the specified 10 MB limit.',
          footer:
            // eslint-disable-next-line max-len
            '<a href="https://github.com/Sid200026/WebGen/blob/master/README.md">Why do I have this issue?</a>',
        });
        return;
      }
      formData.append('image', acceptedFiles[0]);
      formData.append('apiKey', generateAPIKey());
      axios
        .post('/upload/single', formData)
        .then((res) => {
          const { data } = res;
          const { url, fileName } = data;
          dispatch(profilePicFunc(url, fileName));
        })
        .catch((err) => {
          if (err.response.status === 413) {
            Swal.fire({
              icon: 'error',
              title: `Image too large`,
              text: 'Image size exceeds the specified 10 MB limit.',
              footer:
                // eslint-disable-next-line max-len
                '<a href="https://github.com/Sid200026/WebGen/blob/master/README.md">Why do I have this issue?</a>',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: `${err.message}`,
              text:
                'Oops. Looks like some error occured. Please try again in some time',
              footer:
                // eslint-disable-next-line max-len
                '<a href="https://github.com/Sid200026/WebGen/blob/master/README.md">Why do I have this issue?</a>',
            });
          }
        });
    }
  };

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
            <Typography align="center" variant="h6" style={{ marginBottom: '0.6rem' }}>
              Customize Profile Picture
            </Typography>
            <p style={{ margin: '16px 0px' }}>Upload Profile Picture</p>
            {/* 1 B and 10 Mb */}
            <Dropzone
              onDrop={handleDrop}
              accept="image/*"
              minSize={1}
              maxSize={1024 * 1024 * 10}
              maxFiles={1}
              multiple={false}
              canCancel={false}
              style={{ marginBottom: '4rem' }}
            >
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragAccept,
                isDragReject,
                fileRejections,
              }) => {
                // additional CSS depends on dragging status
                // eslint-disable-next-line no-nested-ternary
                const additionalClass = isDragAccept
                  ? 'accept'
                  : isDragReject
                  ? 'reject'
                  : '';

                return (
                  <div
                    {...getRootProps({
                      className: `dropzone ${additionalClass}`,
                    })}
                  >
                    {fileRejections.length > 0 && (
                      <Alert severity="error">File is too large</Alert>
                    )}
                    <input {...getInputProps()} />
                    <span>{isDragActive ? '📂' : '📁'}</span>
                    <p>Drag &apos;n&apos; drop images, or click to select file</p>
                  </div>
                );
              }}
            </Dropzone>
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

export { ProfilePicture };
