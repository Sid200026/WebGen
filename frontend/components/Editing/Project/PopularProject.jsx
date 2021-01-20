/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import axios from 'axios';
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
import Dropzone from 'react-dropzone';
import Alert from '@material-ui/lab/Alert';
import Swal from 'sweetalert2';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { generateAPIKey } from '../../../utils/generateAPIKey';
import { style } from '../../../styles/form';
import {
  popularProjectAdd as popularProjectAddFunc,
  popularProjectDelete as popularProjectDeleteFunc,
  popularProjectEdit as popularProjectEditFunc,
} from '../../../actions/project_action';

const DROP_MODE = {
  ADD: 'ADD',
  EDIT: 'EDIT',
};

const useStyles = makeStyles(style);

const PopularProject = () => {
  const classes = useStyles();

  const initialProjectState = {
    projectTitle: '',
    projectImage: {},
    projectCaption: '',
    projectDescription: '',
    projectLink: '',
  };

  const dispatch = useDispatch();
  const projectReducer = useSelector((state) => state.projectReducer);
  const { popularProject } = projectReducer;
  const [error, setError] = useState('');
  const [open, setOpen] = useState({ id: -1, status: false });
  const [project, setProject] = useState(initialProjectState);
  const [editProject, setEditProject] = useState(initialProjectState);

  const handleClickOpen = (index) => {
    setEditProject(popularProject[index]);
    setOpen({ id: index, status: true });
  };

  const handleClose = () => {
    if (error) setError('');
    setOpen({ id: -1, status: false });
  };

  const handleDrop = (acceptedFiles, mode = DROP_MODE.ADD) => {
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
          if (mode === DROP_MODE.ADD) {
            setProject({
              ...project,
              projectImage: { projectImageURL: url, projectImageName: fileName },
            });
          } else
            setEditProject({
              ...editProject,
              projectImage: { projectImageURL: url, projectImageName: fileName },
            });
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

  const addProject = () => {
    if (project.projectTitle.length === 0) {
      setError('Project Title cannot be empty');
      return;
    }
    if (project.projectCaption.length === 0) {
      setError('Project Caption cannot be empty');
      return;
    }
    if (project.projectDescription.length === 0) {
      setError('Project Description cannot be empty');
      return;
    }
    if (Object.keys(project.projectImage).length === 0) {
      setError(
        // eslint-disable-next-line max-len
        'Please upload an image for the project. If you do not want to upload an image, please use Other Projects',
      );
      return;
    }
    dispatch(popularProjectAddFunc(project));
    setProject(initialProjectState);
    setError('');
  };

  const modifyProject = () => {
    if (editProject.projectTitle.length === 0) {
      setError('Project Title cannot be empty');
      return;
    }
    if (editProject.projectCaption.length === 0) {
      setError('Project Caption cannot be empty');
      return;
    }
    if (editProject.projectDescription.length === 0) {
      setError('Project Description cannot be empty');
      return;
    }
    if (Object.keys(editProject.projectImage).length === 0) {
      setError(
        // eslint-disable-next-line max-len
        'Please upload an image for the project. If you do not want to upload an image, please use Other Projects',
      );
      return;
    }
    dispatch(popularProjectEditFunc(editProject, open.id));
    setEditProject(initialProjectState);
    handleClose();
    setError('');
  };

  const displayProjectImage = () => {
    if (Object.keys(project.projectImage).length === 0) {
      return null;
    }
    return (
      <ListItem divider>
        <ListItemAvatar>
          <Avatar
            alt={project.projectImage.projectImageName}
            src={project.projectImage.projectImageURL}
          />
        </ListItemAvatar>
        <ListItemText primary={`${project.projectImage.projectImageName}`} />
      </ListItem>
    );
  };

  const displayEditProjectImage = () => {
    if (Object.keys(editProject.projectImage).length === 0) {
      return null;
    }
    return (
      <ListItem divider>
        <ListItemAvatar>
          <Avatar
            alt={editProject.projectImage.projectImageName}
            src={editProject.projectImage.projectImageURL}
          />
        </ListItemAvatar>
        <ListItemText primary={`${editProject.projectImage.projectImageName}`} />
      </ListItem>
    );
  };

  const getAllProjects = () => {
    return popularProject.map((currentProject, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem divider key={index}>
        <ListItemAvatar>
          <Avatar
            alt={currentProject.projectImage.projectImageName}
            src={currentProject.projectImage.projectImageURL}
          />
        </ListItemAvatar>
        <ListItemText primary={`${currentProject.projectTitle}`} />
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
            onClick={() => dispatch(popularProjectDeleteFunc(index))}
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
      <DialogTitle id="form-dialog-title">Modify Projects</DialogTitle>
      {error && <Alert severity="error">{error}</Alert>}
      <DialogContent>
        <TextField
          variant="outlined"
          label="Project Title"
          fullWidth
          className={classes.input}
          required
          value={editProject.projectTitle}
          onChange={(event) =>
            setEditProject({ ...editProject, projectTitle: event.target.value })
          }
        />
        <TextField
          variant="outlined"
          label="Project Caption"
          fullWidth
          helperText="Few words on the project"
          className={classes.input}
          required
          value={editProject.projectCaption}
          onChange={(event) =>
            setEditProject({ ...editProject, projectCaption: event.target.value })
          }
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
          value={editProject.projectDescription}
          onChange={(event) =>
            setEditProject({ ...editProject, projectDescription: event.target.value })
          }
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
          value={editProject.projectLink}
          onChange={(event) =>
            setEditProject({ ...editProject, projectLink: event.target.value })
          }
        />
        <p style={{ margin: '16px 0px' }}>Customize project picture</p>
        <Dropzone
          onDrop={(acceptedFiles) => handleDrop(acceptedFiles, DROP_MODE.EDIT)}
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
        <List className={classes.list}>{displayEditProjectImage()}</List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={modifyProject} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {getModifyDialog()}
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
              value={project.projectTitle}
              onChange={(event) =>
                setProject({ ...project, projectTitle: event.target.value })
              }
            />
            <TextField
              variant="outlined"
              label="Project Caption"
              fullWidth
              helperText="Few words on the project"
              className={classes.input}
              required
              value={project.projectCaption}
              onChange={(event) =>
                setProject({ ...project, projectCaption: event.target.value })
              }
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
              value={project.projectDescription}
              onChange={(event) =>
                setProject({ ...project, projectDescription: event.target.value })
              }
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
              value={project.projectLink}
              onChange={(event) =>
                setProject({ ...project, projectLink: event.target.value })
              }
            />
            <p style={{ margin: '16px 0px' }}>Customize project picture</p>
            <Dropzone
              onDrop={(acceptedFiles) => handleDrop(acceptedFiles, DROP_MODE.ADD)}
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
            <List className={classes.list}>{displayProjectImage()}</List>
            <Button
              variant="contained"
              style={{ marginTop: '25px' }}
              onClick={addProject}
            >
              Save Project
            </Button>
            {/* TODO: Add example of greeting here */}
            {popularProject.length > 0 && (
              <>
                <Typography
                  align="left"
                  variant="h6"
                  style={{ marginTop: '25px', textDecoration: 'underline' }}
                >
                  Popular Projects
                </Typography>
                <List className={classes.list}>{getAllProjects()}</List>
              </>
            )}
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
