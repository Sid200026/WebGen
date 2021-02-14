import React, { useState } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { style } from '../../../styles/Preview/contact_preview';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const Alert = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles(style);

const ContactLayout = () => {
  const [contactContent, setContactContent] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    status: 'info',
  });
  const [windowWidth] = useWindowSize();

  const aboutMeReducer = useSelector((stateReact) => stateReact.aboutMeReducer);
  const workExperienceReducer = useSelector(
    (stateReact) => stateReact.workExperienceReducer,
  );

  const projectReducer = useSelector((stateReact) => stateReact.projectReducer);

  const achievementReducer = useSelector((stateReact) => stateReact.achievementReducer);
  const contactReducer = useSelector((state) => state.contactReducer);
  const {
    footerColor,
    footerText,
    footerBorder,
    footerBackground,
    background,
    pageHeadline,
    pageHeadlineColor,
    formBackground,
    formColor,
    formSpreeLink,
  } = contactReducer;

  const { enable: aboutMeEnable } = aboutMeReducer;
  const { enable: workExperienceEnable } = workExperienceReducer;
  const { enable: projectEnable } = projectReducer;
  const { enable: achievementEnable } = achievementReducer;

  let prevBackground = 'white';
  if (achievementEnable) {
    prevBackground = achievementReducer.background;
  } else if (projectEnable) {
    prevBackground = projectReducer.background;
  } else if (workExperienceEnable) {
    prevBackground = workExperienceReducer.background;
  } else if (aboutMeEnable) {
    prevBackground = aboutMeReducer.background;
  }

  const handleOpen = (message, status) => {
    setSnackbar({ open: true, message, status });
  };

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ open: false, message: '', status: 'info' });
  };

  const classes = useStyles();

  const submitForm = (ev) => {
    ev.preventDefault();
    if (contactContent.name.length === 0) {
      handleOpen('Name cannot be empty', 'error');
      return;
    }
    if (contactContent.email.length === 0) {
      handleOpen('Email cannot be empty', 'error');
      return;
    }
    if (contactContent.message.length === 0) {
      handleOpen('Message cannot be empty', 'error');
      return;
    }
    axios({
      method: 'POST',
      url: formSpreeLink,
      data: contactContent,
    })
      .then(() => {
        handleOpen('Message has been sent', 'success');
      })
      .catch(() => {
        handleOpen('Message could not be sent', 'error');
      });
  };

  return (
    <>
      <div className="contact__container" />
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbar.status}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      <div style={{ background }} className={classes.contactLayout}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L50 100 L100 0 Z"
            fill={prevBackground}
            stroke={prevBackground}
          />
        </svg>
        <Typography
          style={{ color: pageHeadlineColor }}
          className={clsx(classes.pageHeadline, {
            [classes.responsivePageHeadline]: windowWidth < 750,
          })}
        >
          {pageHeadline}
        </Typography>
        <div
          className={clsx(classes.contactForm, {
            [classes.responsiveContactForm]: windowWidth < 750,
          })}
        >
          <input
            placeholder="Name"
            name="name"
            className={classes.inputLabel}
            style={{ backgroundColor: formBackground, color: formColor }}
            value={contactContent.name}
            onChange={(event) =>
              setContactContent({ ...contactContent, name: event.target.value })
            }
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            className={classes.inputLabel}
            style={{ backgroundColor: formBackground, color: formColor }}
            value={contactContent.email}
            onChange={(event) =>
              setContactContent({ ...contactContent, email: event.target.value })
            }
          />
          <textarea
            style={{ backgroundColor: formBackground, color: formColor }}
            placeholder="Message"
            name="message"
            className={classes.textAreaLabel}
            value={contactContent.message}
            rows={5}
            onChange={(event) =>
              setContactContent({ ...contactContent, message: event.target.value })
            }
          />
        </div>
        <Button
          onClick={submitForm}
          variant="contained"
          style={{
            backgroundColor: formBackground,
            color: formColor,
            marginTop: '1.4rem',
          }}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
        <div
          className={classes.footerContainer}
          style={{
            background: footerBackground,
            borderTop: `1px solid ${footerBorder}`,
          }}
        >
          <p className={classes.footerText} style={{ color: footerColor }}>
            {footerText}
          </p>
        </div>
      </div>
    </>
  );
};

export { ContactLayout };
