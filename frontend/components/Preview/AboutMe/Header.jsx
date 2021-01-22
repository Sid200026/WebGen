import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import FlagIcon from '@material-ui/icons/Flag';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
// import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import { style } from '../../../styles/Preview/previewHeader';

const useStyles = makeStyles(style);
const warningWidth = 860;

const Header = (props) => {
  const { menuColor, menuBackground } = props;
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

  const handleResize = () => {
    updateWidth(window.innerWidth);
    if (width > 1160 && open) {
      handleDrawerClose();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const gotoNextSection = (className) => {
    handleDrawerClose();
    document
      .getElementsByClassName(className)[0]
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const introductionReducer = useSelector(
    (stateReact) => stateReact.introductionReducer,
  );

  const aboutMeReducer = useSelector((stateReact) => stateReact.aboutMeReducer);
  const workExperienceReducer = useSelector(
    (stateReact) => stateReact.workExperienceReducer,
  );
  const projectReducer = useSelector((stateReact) => stateReact.projectReducer);

  const { enable: introductionEnable } = introductionReducer;
  const { enable: aboutMeEnable, pageHeadline: pageHeadlineAboutMe } = aboutMeReducer;
  const {
    enable: workExperienceEnable,
    pageHeadline: pageHeadlineWorkExperience,
  } = workExperienceReducer;
  const { enable: projectEnable, pageHeadline: pageHeadlineProject } = projectReducer;

  // const navItems = [
  //   { name: 'Introduction', icon: FlagIcon, classname: 'static__container' },
  //   { name: 'About Me', icon: EmojiPeopleIcon, classname: 'preview__container' },
  //   {
  //     name: 'Work Experience',
  //     icon: WorkIcon,
  //     classname: 'work_experience__container',
  //   },
  //   { name: 'Projects', icon: ColorLensIcon, classname: '' },
  //   { name: 'Achievements', icon: ImportContactsIcon, classname: '' },
  //   { name: 'Contact', icon: ContactPhoneIcon, classname: '' },
  // ];

  const navItems = [];

  if (introductionEnable)
    navItems.push({
      name: 'Introduction',
      icon: FlagIcon,
      classname: 'static__container',
    });

  if (aboutMeEnable)
    navItems.push({
      name: pageHeadlineAboutMe,
      icon: EmojiPeopleIcon,
      classname: 'preview__container',
    });

  if (workExperienceEnable)
    navItems.push({
      name: pageHeadlineWorkExperience,
      icon: WorkIcon,
      classname: 'work_experience__container',
    });
  if (projectEnable) {
    navItems.push({
      name: pageHeadlineProject,
      icon: ColorLensIcon,
      classname: 'project__container',
    });
  }

  return (
    <>
      <AppBar
        className={clsx(classes.navBar, classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ background: menuBackground }}
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
          {width > warningWidth && (
            <div className={classes.navButtons}>
              {navItems.map((info) => (
                <Button
                  key={info.name}
                  color="inherit"
                  className={classes.labelButton}
                  onClick={() => gotoNextSection(info.classname)}
                  style={{ color: menuColor }}
                >
                  {info.name}
                </Button>
              ))}
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
              onClick={() => gotoNextSection(info.classname)}
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
    </>
  );
};

Header.propTypes = {
  menuColor: PropTypes.string.isRequired,
  menuBackground: PropTypes.string.isRequired,
};

export { Header };
