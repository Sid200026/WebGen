import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import { navigate } from '@reach/router';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import FlagIcon from '@material-ui/icons/Flag';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import { style } from '../../styles/header';

const useStyles = makeStyles(style);
const warningWidth = 1180;

const Header = (props) => {
  const classes = useStyles();
  const [width, updateWidth] = useState(window.innerWidth);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      updateWidth(window.innerWidth);
      if (width > 500 && open) {
        handleDrawerClose();
      }
    });
  });

  const navigateTo = (link, state) => {
    navigate(link, { state });
  };

  const navItems = [
    { name: 'Introduction', icon: FlagIcon, link: '/' },
    { name: 'About Me', icon: EmojiPeopleIcon, link: '/about' },
    { name: 'Work Experience', icon: WorkIcon, link: '/work' },
    { name: 'Projects', icon: ColorLensIcon, link: '/project' },
    { name: 'Achievements', icon: ImportContactsIcon, link: '/achievement' },
    { name: 'Contact', icon: ContactPhoneIcon, link: '/contact' },
  ];

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
                src="public/logo_transparent.png"
                className={clsx(classes.logo, 'pagelayout-container', {
                  [classes.logoResponsive]: width < warningWidth,
                })}
                alt="WebGen"
              />
            </Typography>
            <Typography variant="h5">WebGen</Typography>
            {width > warningWidth && (
              <div className={classes.navButtons}>
                <Button
                  color="inherit"
                  className={classes.labelButton}
                  onClick={() => {
                    navigateTo('/');
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
                  Project
                </Button>
                <Button
                  color="inherit"
                  className={classes.labelButton}
                  onClick={() => {
                    navigateTo('/achievement');
                  }}
                >
                  Achievement
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
