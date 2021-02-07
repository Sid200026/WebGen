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
  popularProjectAdd as popularProjectAddFunc,
  popularProjectDelete as popularProjectDeleteFunc,
  popularProjectEdit as popularProjectEditFunc,
  popularProjectBatchDelete as popularProjectBatchDeleteFunc,
} from '../../../actions/project_action';
import { warningWidth } from '../../../constants/writeups/index';
import { PopularProjectInfo } from '../../../constants/writeups/project';
import { checkImagePromises } from '../../../utils/imageExists';

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

  const addProject = () => {
    if (project.projectTitle.length === 0) {
      setError(PopularProjectInfo.error.emptyProjectTitle);
      return;
    }
    if (project.projectCaption.length === 0) {
      setError(PopularProjectInfo.error.emptyProjectCaption);
      return;
    }
    if (project.projectDescription.length === 0) {
      setError(PopularProjectInfo.error.emptyProjectDescription);
      return;
    }
    if (Object.keys(project.projectImage).length === 0) {
      setError(PopularProjectInfo.error.emptyProjectImage);
      return;
    }
    dispatch(popularProjectAddFunc(project));
    setProject(initialProjectState);
    setError('');
  };

  const modifyProject = () => {
    if (editProject.projectTitle.length === 0) {
      setError(PopularProjectInfo.error.emptyProjectTitle);
      return;
    }
    if (editProject.projectCaption.length === 0) {
      setError(PopularProjectInfo.error.emptyProjectCaption);
      return;
    }
    if (editProject.projectDescription.length === 0) {
      setError(PopularProjectInfo.error.emptyProjectDescription);
      return;
    }
    if (Object.keys(editProject.projectImage).length === 0) {
      setError(PopularProjectInfo.error.emptyProjectImage);
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
      <ListItem divider key={currentProject.projectTitle}>
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
          label={PopularProjectInfo.field.projectTitle.label}
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
          label={PopularProjectInfo.field.projectCaption.label}
          fullWidth
          helperText={PopularProjectInfo.field.projectCaption.help}
          className={classes.input}
          required
          value={editProject.projectCaption}
          onChange={(event) =>
            setEditProject({ ...editProject, projectCaption: event.target.value })
          }
        />
        <TextField
          variant="outlined"
          label={PopularProjectInfo.field.description.label}
          rows={5}
          multiline
          fullWidth
          helperText={PopularProjectInfo.field.description.help}
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
          {PopularProjectInfo.field.link.help}
        </Typography>
        <TextField
          variant="outlined"
          label={PopularProjectInfo.field.link.label}
          fullWidth
          className={classes.input}
          value={editProject.projectLink}
          onChange={(event) =>
            setEditProject({ ...editProject, projectLink: event.target.value })
          }
        />
        <p style={{ margin: '16px 0px' }}>
          {PopularProjectInfo.field.projectImage.label}
        </p>
        <FileUpload
          callback={(url, fileName) =>
            setEditProject({
              ...editProject,
              projectImage: { projectImageURL: url, projectImageName: fileName },
            })
          }
        />
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

  useEffect(() => {
    const promises = [];
    popularProject.forEach((currentProject) => {
      promises.push(checkImagePromises(currentProject.projectImage.projectImageURL));
    });
    const indexOfProjectWithNoImage = [];
    Promise.all(promises)
      .then((responses) => {
        responses.forEach((response, index) => {
          if (!response.success) indexOfProjectWithNoImage.push(index);
        });
      })
      .catch(() => {})
      .finally(() => {
        if (indexOfProjectWithNoImage.length !== 0) {
          dispatch(popularProjectBatchDeleteFunc(indexOfProjectWithNoImage));
        }
      });
  }, []);

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {getModifyDialog()}
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
              {PopularProjectInfo.title}
            </Typography>
            <TextField
              variant="outlined"
              label={PopularProjectInfo.field.projectTitle.label}
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
              label={PopularProjectInfo.field.projectCaption.label}
              fullWidth
              helperText={PopularProjectInfo.field.projectCaption.help}
              className={classes.input}
              required
              value={project.projectCaption}
              onChange={(event) =>
                setProject({ ...project, projectCaption: event.target.value })
              }
            />
            <TextField
              variant="outlined"
              label={PopularProjectInfo.field.description.label}
              rows={5}
              multiline
              fullWidth
              helperText={PopularProjectInfo.field.description.help}
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
              {PopularProjectInfo.field.link.help}
            </Typography>
            <TextField
              variant="outlined"
              label={PopularProjectInfo.field.link.label}
              fullWidth
              className={classes.input}
              required
              value={project.projectLink}
              onChange={(event) =>
                setProject({ ...project, projectLink: event.target.value })
              }
            />
            <p style={{ margin: '16px 0px' }}>
              {PopularProjectInfo.field.projectImage.label}
            </p>
            <FileUpload
              callback={(url, fileName) =>
                setProject({
                  ...project,
                  projectImage: { projectImageURL: url, projectImageName: fileName },
                })
              }
            />
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
            src={PopularProjectInfo.image.src}
            alt={PopularProjectInfo.image.src}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { PopularProject };
