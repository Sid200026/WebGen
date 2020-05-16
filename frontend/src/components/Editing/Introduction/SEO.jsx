/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Dropzone from 'react-dropzone';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/form';
import {
  title as titleFunc,
  meta as metaFunc,
} from '../../../actions/introduction_action';
import '../../../styles/Dropzone.scss';

const useStyles = makeStyles(style);

const SEO = () => {
  const classes = useStyles();

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const { metadesc, title } = introductionReducer;
  const dispatch = useDispatch();

  const handleDrop = (acceptedFiles) =>
    // eslint-disable-next-line no-console
    console.log(acceptedFiles.map((file) => file.name));

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
            {/* 1 Kb and 3 Mb */}
            <Dropzone
              onDrop={handleDrop}
              accept="image/*"
              minSize={1024}
              maxSize={3072000}
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
