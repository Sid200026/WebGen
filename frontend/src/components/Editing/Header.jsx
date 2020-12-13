/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import { navigate } from '@reach/router';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Swal from 'sweetalert2';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DoneIcon from '@material-ui/icons/Done';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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

import { style } from '../../styles/header';

const useStyles = makeStyles(style);
const warningWidth = 1160;

const Header = (props) => {
  const classes = useStyles();
  const [width, updateWidth] = useState(window.innerWidth);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  const saveConfigFile = () => {
    handleClose();
    Swal.fire({
      title: 'Save your configuration file',
      html:
        // eslint-disable-next-line max-len
        'You can upload the downloaded file to resume from where you stopped. <Note : Images will be deleted from the server within 24 hours.',
      showCancelButton: true,
      confirmButtonText: `Save File`,
    }).then((result) => {
      if (result.isConfirmed) {
        const apiData = {
          introduction: introductionReducer,
          aboutMe: aboutMeReducer,
        };
        const json = JSON.stringify(apiData);
        const blob = new Blob([json], { type: 'application/json' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = 'config.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  const { children } = props;

  return (
    <div className={classes.pageLayout}>
      <div className={classes.root}>
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
                  <MenuItem onClick={handleClose} className={classes.menuConfig}>
                    <ListItemIcon>
                      <PublishIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Load</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.menuConfig}>
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
