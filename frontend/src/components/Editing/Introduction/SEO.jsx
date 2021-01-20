/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { FileUpload } from '../FileUpload.jsx';
import { style } from '../../../styles/form';
import {
  title as titleFunc,
  meta as metaFunc,
  favicon as faviconFunc,
  deleteFavicon,
} from '../../../actions/introduction_action';
import '../../../styles/Dropzone.scss';
import { checkImage } from '../../../utils/imageExists';
import { SEOInfo } from '../../../constants/writeups/introduction';
import { warningWidth } from '../../../constants/writeups/index';

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
              {SEOInfo.title}
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              {SEOInfo.help}
            </Typography>
            <TextField
              variant="outlined"
              label={SEOInfo.field.title.label}
              value={title}
              onChange={(event) => {
                dispatch(titleFunc(event.target.value));
              }}
              fullWidth
              helperText={SEOInfo.field.title.help}
              className={classes.input}
              required
            />
            <TextField
              variant="outlined"
              label={SEOInfo.field.description.label}
              value={metadesc}
              onChange={(event) => {
                dispatch(metaFunc(event.target.value));
              }}
              fullWidth
              className={classes.input}
              required
            />
            <p style={{ margin: '16px 0px' }}>{SEOInfo.field.favicon.label}</p>
            {/* 1 B and 10 Mb */}
            <FileUpload
              callback={(url, fileName) => dispatch(faviconFunc(url, fileName))}
            />
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
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={SEOInfo.image.src}
            alt={SEOInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { SEO };
