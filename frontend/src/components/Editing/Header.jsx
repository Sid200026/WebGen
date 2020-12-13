/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, react/jsx-props-no-spreading, max-len  */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import { navigate } from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Swal from 'sweetalert2';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DoneIcon from '@material-ui/icons/Done';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dropzone from 'react-dropzone';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PublishIcon from '@material-ui/icons/Publish';
import ClearIcon from '@material-ui/icons/Clear';
import HelpIcon from '@material-ui/icons/Help';
import SaveIcon from '@material-ui/icons/Save';
import FlagIcon from '@material-ui/icons/Flag';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { reset as resetIntroduction } from '../../actions/introduction_action';
import { reset as resetAboutMe } from '../../actions/about_me_action';
import { reset as resetWorkExperience } from '../../actions/work_experience_action';
import { localStorageKey } from '../../stores/store';

import { style } from '../../styles/header';

const useStyles = makeStyles(style);
const warningWidth = 1160;

const Header = (props) => {
  const classes = useStyles();
  const [width, updateWidth] = useState(window.innerWidth);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
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
      const fileReader = new FileReader();
      fileReader.readAsText(acceptedFiles[0], 'UTF-8');
      fileReader.onload = (event) => {
        // eslint-disable-next-line no-unused-vars
        const jsonData = JSON.parse(event.target.result);
      };
    }
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      updateWidth(window.innerWidth);
      if (width > 1160 && open) {
        handleDrawerClose();
      }
    });
  });

  const navigateTo = (link, state) => {
    navigate(link, { state });
  };

  const navItems = [
    { name: 'Introduction', icon: FlagIcon, link: '/introduction' },
    { name: 'About Me', icon: EmojiPeopleIcon, link: '/about' },
    { name: 'Work Experience', icon: WorkIcon, link: '/work' },
    { name: 'Projects', icon: ColorLensIcon, link: '/project' },
    { name: 'Achievements', icon: ImportContactsIcon, link: '/achievement' },
    { name: 'Contact', icon: ContactPhoneIcon, link: '/contact' },
    {
      name: 'Finish',
      icon: ArrowDownwardIcon,
      link: '/submit',
      subMenu: [
        { name: 'Finish' },
        { name: 'Save' },
        { name: 'Load' },
        { name: 'Reset' },
        { name: 'Help' },
      ],
    },
  ];

  const introductionReducer = useSelector((state) => state.introductionReducer);
  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const workExperienceReducer = useSelector((state) => state.workExperienceReducer);

  const saveConfigFile = () => {
    handleClose();
    Swal.fire({
      title: 'Save your configuration file',
      html:
        // eslint-disable-next-line max-len
        'You can upload the downloaded file to resume from where you stopped.<br><p style="color:grey;">Note : Images will be deleted from the server within 24 hours.</p>',
      showCancelButton: true,
      confirmButtonText: `Save File`,
    }).then((result) => {
      if (result.isConfirmed) {
        const apiData = {
          introduction: introductionReducer,
          aboutMe: aboutMeReducer,
          workExperience: workExperienceReducer,
        };
        const json = JSON.stringify(apiData);
        const blob = new Blob([json], { type: 'application/json' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = 'checkpoint.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  const resetConfigFile = () => {
    handleClose();
    Swal.fire({
      icon: 'warning',
      title: 'Do you want to reset ?',
      html:
        // eslint-disable-next-line max-len
        "Once you reset all the fields, you won't be able to go back to the previous version. We recommend saving the configuration file before resetting the fields.",
      showCancelButton: true,
      confirmButtonText: `Reset Fields`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(localStorageKey);
        dispatch(resetIntroduction());
        dispatch(resetAboutMe());
        dispatch(resetWorkExperience());
      }
    });
  };

  const { children } = props;

  return (
    <div className={classes.pageLayout}>
      <div className={classes.root}>
        <Dialog
          open={openDialog}
          onClose={handleDialogClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Load Configuration File</DialogTitle>
          <DialogContent>
            <Dropzone
              onDrop={handleDrop}
              accept="application/json"
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
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...getRootProps({
                      className: `dropzone ${additionalClass}`,
                    })}
                  >
                    {fileRejections.length > 0 && (
                      <Alert severity="error">File is too large</Alert>
                    )}
                    <input {...getInputProps()} />
                    <span>{isDragActive ? '📂' : '📁'}</span>
                    <p>
                      Drag &apos;n&apos; drop configuration, or click to select file
                    </p>
                  </div>
                );
              }}
            </Dropzone>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDialogClose} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.navBar, classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            {width <= warningWidth && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap>
              <img
                id="webgenlogo"
                src="public/logo_transparent.png"
                className={clsx(classes.logo, 'pagelayout-container', {
                  [classes.logoResponsive]: width < warningWidth,
                })}
                alt="WebGen"
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    navigateTo('/', {});
                  }
                }}
                onClick={() => navigateTo('/', {})}
              />
            </Typography>
            <Typography
              id="webgenlogo"
              variant="h5"
              onClick={() => navigateTo('/', {})}
            >
              WebGen
            </Typography>
            {width > warningWidth && (
              <div className={classes.navButtons}>
                <Button
                  color="inherit"
                  className={classes.labelButton}
                  onClick={() => {
                    navigateTo('/introduction');
                  }}
                >
                  Introduction
                </Button>
                <Button
                  color="inherit"
                  className={classes.labelButton}
                  onClick={() => {
                    navigateTo('/about');
                  }}
                >
                  About Me
                </Button>
                <Button
                  color="inherit"
                  className={classes.labelButton}
                  onClick={() => {
                    navigateTo('/work');
                  }}
                >
                  Work Experience
                </Button>
                <Button
                  color="inherit"
                  className={classes.labelButton}
                  onClick={() => {
                    navigateTo('/project');
                  }}
                >
                  Projects
                </Button>
                <Button
                  color="inherit"
                  className={classes.labelButton}
                  onClick={() => {
                    navigateTo('/achievement');
                  }}
                >
                  Achievements
                </Button>
                <Button
                  color="inherit"
                  className={classes.labelButton}
                  onClick={() => {
                    navigateTo('/contact');
                  }}
                >
                  Contact
                </Button>
                <Button
                  color="inherit"
                  className={classes.labelButton}
                  endIcon={<ArrowDownwardIcon />}
                  onClick={handleClick}
                >
                  More
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  elevation={0}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      navigateTo('/submit');
                      handleClose();
                    }}
                    className={classes.menuConfig}
                  >
                    <ListItemIcon>
                      <DoneIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Finish</Typography>
                  </MenuItem>
                  <MenuItem onClick={saveConfigFile} className={classes.menuConfig}>
                    <ListItemIcon>
                      <SaveIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Save</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleDialogOpen} className={classes.menuConfig}>
                    <ListItemIcon>
                      <PublishIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Load</Typography>
                  </MenuItem>
                  <MenuItem onClick={resetConfigFile} className={classes.menuConfig}>
                    <Typography variant="inherit">
                      <ListItemIcon>
                        <ClearIcon fontSize="small" />
                      </ListItemIcon>
                      Reset
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.menuConfig}>
                    <Typography variant="inherit">
                      <ListItemIcon>
                        <HelpIcon fontSize="small" />
                      </ListItemIcon>
                      Help
                    </Typography>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {navItems.map((info) => (
              <ListItem
                button
                key={info.name}
                onClick={() => {
                  navigateTo(info.link);
                }}
              >
                <ListItemIcon>
                  <info.icon />
                </ListItemIcon>
                <ListItemText primary={info.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {children}
        </main>
      </div>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Header };
