/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Dropzone from 'react-dropzone';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Swal from 'sweetalert2';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  title as titleFunc,
  meta as metaFunc,
  favicon as faviconFunc,
  deleteFavicon,
} from '../../../actions/introduction_action';
import '../../../styles/Dropzone.scss';
import { checkImage } from '../../../utils/imageExists';

const useStyles = makeStyles(style);

const SEO = () => {
  const classes = useStyles();

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const { metadesc, title, favicon } = introductionReducer;
  const dispatch = useDispatch();

  const deleteImage = () => {
    dispatch(deleteFavicon());
  };
  useEffect(() => {
    if (favicon) {
      checkImage(favicon.url, deleteImage);
    }
  }, []);

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);
      axios
        .post('/api/upload/single', formData)
        .then((res) => {
          const { data } = res;
          const { url, fileName } = data;
          dispatch(faviconFunc(url, fileName));
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: `${err.message}`,
            text: 'Oops. Looks like some error occured. Please try again in some time',
            footer:
              // eslint-disable-next-line max-len
              '<a href="https://github.com/Sid200026/WebGen/blob/master/README.md">Why do I have this issue?</a>',
          });
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
              Customize Website Meta Description
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              Customizing these attributes will improve SEO of your website ie. if you
              ever host it, then the chances that Google&apos;s algorithm shows your
              page at the top increases.
            </Typography>
            <TextField
              variant="outlined"
              label="Title of your website"
              value={title}
              onChange={(event) => {
                dispatch(titleFunc(event.target.value));
              }}
              fullWidth
              helperText="For Eg, John Doe"
              className={classes.input}
              required
            />
            <TextField
              variant="outlined"
              label="Description of your website"
              value={metadesc}
              onChange={(event) => {
                dispatch(metaFunc(event.target.value));
              }}
              fullWidth
              className={classes.input}
              required
            />
            <p style={{ margin: '16px 0px' }}>Upload a Favicon</p>
            {/* 1 B and 10 Mb */}
            <Dropzone
              onDrop={handleDrop}
              accept="image/*"
              minSize={1}
              maxSize={10485760}
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
                    <input {...getInputProps()} />
                    <span>{isDragActive ? '📂' : '📁'}</span>
                    <p>Drag &apos;n&apos; drop images, or click to select file</p>
                  </div>
                );
              }}
            </Dropzone>
            {Object.keys(favicon).length !== 0 && favicon.constructor === Object && (
              <List className={classes.list} dense>
                <ListItem divider>
                  <ListItemAvatar>
                    <Avatar alt={favicon.name} src={favicon.url} />
                  </ListItemAvatar>
                  <ListItemText primary={favicon.name} />
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

export { SEO };
