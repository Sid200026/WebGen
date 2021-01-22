/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
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
import { style } from '../../../styles/Editing/form';
import {
  otherProjectAdd as otherProjectAddFunc,
  otherProjectDelete as otherProjectDeleteFunc,
  otherProjectEdit as otherProjectEditFunc,
} from '../../../actions/project_action';
import { OtherProjectInfo } from '../../../constants/writeups/project';
import { warningWidth } from '../../../constants/writeups/index';

const useStyles = makeStyles(style);

const OtherProject = () => {
  const classes = useStyles();

  const initialProjectState = {
    projectTitle: '',
    projectCaption: '',
    projectDescription: '',
    projectLink: '',
  };

  const dispatch = useDispatch();
  const projectReducer = useSelector((state) => state.projectReducer);
  const { otherProject } = projectReducer;
  const [error, setError] = useState('');
  const [open, setOpen] = useState({ id: -1, status: false });
  const [project, setProject] = useState(initialProjectState);
  const [editProject, setEditProject] = useState(initialProjectState);

  const handleClickOpen = (index) => {
    setEditProject(otherProject[index]);
    setOpen({ id: index, status: true });
  };

  const handleClose = () => {
    if (error) setError('');
    setOpen({ id: -1, status: false });
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
    dispatch(otherProjectAddFunc(project));
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
    dispatch(otherProjectEditFunc(editProject, open.id));
    setEditProject(initialProjectState);
    handleClose();
    setError('');
  };

  const getAllProjects = () => {
    return otherProject.map((currentProject, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem divider key={index}>
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
            onClick={() => dispatch(otherProjectDeleteFunc(index))}
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
          label={OtherProjectInfo.field.projectTitle.label}
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
          label={OtherProjectInfo.field.projectCaption.label}
          fullWidth
          helperText={OtherProjectInfo.field.projectCaption.help}
          className={classes.input}
          required
          value={editProject.projectCaption}
          onChange={(event) =>
            setEditProject({ ...editProject, projectCaption: event.target.value })
          }
        />
        <TextField
          variant="outlined"
          label={OtherProjectInfo.field.description.label}
          rows={5}
          multiline
          fullWidth
          helperText={OtherProjectInfo.field.description.help}
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
          {OtherProjectInfo.field.link.help}
        </Typography>
        <TextField
          variant="outlined"
          label={OtherProjectInfo.field.link.label}
          fullWidth
          className={classes.input}
          required
          value={editProject.projectLink}
          onChange={(event) =>
            setEditProject({ ...editProject, projectLink: event.target.value })
          }
        />
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
              {OtherProjectInfo.title}
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              {OtherProjectInfo.help}
            </Typography>
            <TextField
              variant="outlined"
              label={OtherProjectInfo.field.projectTitle.label}
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
              label={OtherProjectInfo.field.projectCaption.label}
              fullWidth
              helperText={OtherProjectInfo.field.projectCaption.help}
              className={classes.input}
              required
              value={project.projectCaption}
              onChange={(event) =>
                setProject({ ...project, projectCaption: event.target.value })
              }
            />
            <TextField
              variant="outlined"
              label={OtherProjectInfo.field.description.label}
              rows={5}
              multiline
              fullWidth
              helperText={OtherProjectInfo.field.description.help}
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
              {OtherProjectInfo.field.link.help}
            </Typography>
            <TextField
              variant="outlined"
              label={OtherProjectInfo.field.link.label}
              fullWidth
              className={classes.input}
              required
              value={project.projectLink}
              onChange={(event) =>
                setProject({ ...project, projectLink: event.target.value })
              }
            />
            <Button
              variant="contained"
              style={{ marginTop: '25px' }}
              onClick={addProject}
            >
              Save Project
            </Button>
            {/* TODO: Add example of greeting here */}
            {otherProject.length > 0 && (
              <>
                <Typography
                  align="left"
                  variant="h6"
                  style={{ marginTop: '25px', textDecoration: 'underline' }}
                >
                  Other Projects
                </Typography>
                <List className={classes.list}>{getAllProjects()}</List>
              </>
            )}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={OtherProjectInfo.image.src}
            alt={OtherProjectInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { OtherProject };
