/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Dropzone from 'react-dropzone';
import Alert from '@material-ui/lab/Alert';
import Swal from 'sweetalert2';
import { generateAPIKey } from '../../../utils/generateAPIKey';
import { style } from '../../../styles/form';

const useStyles = makeStyles(style);

const PopularProject = () => {
  const classes = useStyles();

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
          // eslint-disable-next-line no-unused-vars
          const { url, fileName } = data;
          //   dispatch(profilePicFunc(url, fileName));
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
          } else if (err.response.status === 429) {
            Swal.fire({
              icon: 'error',
              title: `Too many uploads`,
              text: `${err.response.data}`,
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
            <Typography align="center" variant="h6" style={{ marginBottom: '1rem' }}>
              Customize Popular Project Card Content
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              You can upload upto 6 projects as Popular Projects. Any other projects
              must be added as Other Projects.
            </Typography>
            <TextField
              variant="outlined"
              label="Project Title"
              fullWidth
              className={classes.input}
              required
            />
            <TextField
              variant="outlined"
              label="Project Caption"
              fullWidth
              helperText="Few words on the project"
              className={classes.input}
              required
            />
            <TextField
              variant="outlined"
              label="Description"
              rows={5}
              multiline
              fullWidth
              helperText="Describe the project"
              className={classes.input}
              required
            />
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginTop: '1.3rem' }}
            >
              If you don&apos;t provide a project link, the view button won&apos;t be
              displayed for that project
            </Typography>
            <TextField
              variant="outlined"
              label="Project Link"
              fullWidth
              className={classes.input}
              required
            />
            <p style={{ margin: '16px 0px' }}>Customize project picture</p>
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

export { PopularProject };
