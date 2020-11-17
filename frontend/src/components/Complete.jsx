/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { navigate } from '@reach/router';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { style } from '../styles/complete';
import { Footer } from './Editing/Footer.jsx';
import { getTheme, STATIC } from './ParticleThemes/index';

const useStyles = makeStyles(style);

const Complete = (props) => {
  const { location } = props;
  const { state: stateLocation } = location;
  let email = '';
  let isProcessComplete = false;
  if (stateLocation) {
    const { isComplete, email: userEmail } = stateLocation;
    isProcessComplete = isComplete;
    email = userEmail;
  }

  if (!isProcessComplete) {
    navigate('/', { replace: true });
  }

  const [memeUrl, setMemeUrl] = useState('public/images/complete.jpg');
  const classes = useStyles();

  const updateMemeUrl = async () => {
    // https://github.com/D3vd/Meme_Api
    const response = await axios.get('https://meme-api.herokuapp.com/gimme');
    const { data } = response;
    const { url } = data;
    setMemeUrl(url);
  };

  useEffect(() => {
    updateMemeUrl();
  }, []);
  return (
    <>
      <div className={(classes.particleContainer, 'pseudoClass2')}>
        {getTheme(STATIC, '#000000', '#0E6666')}
      </div>
      <Container maxWidth="xl" className={classes.container}>
        <img
          id="webgenlogo"
          src="public/logo_transparent.png"
          alt="Logo"
          className={classes.logo}
          onClick={() => navigate('/')}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              navigate('/');
            }
          }}
        />
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          className={clsx(classes.heading, {
            [classes.responsiveHeading]: window.innerWidth > 750,
          })}
        >
          Thank you for using WebGen
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          align="center"
          className={clsx(classes.secondaryMsg, {
            [classes.responsiveSecondaryMsg]: window.innerWidth < 750,
          })}
        >
          Your website will be sent to <em className={classes.email}>{email}</em>.
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          align="center"
          className={clsx(classes.secondaryMsg, {
            [classes.responsiveSecondaryMsg]: window.innerWidth < 750,
          })}
        >
          It may take about 2-10 minutes to send the file depending on the traffic.
        </Typography>
        <div
          className={clsx(classes.logoContainer, {
            [classes.responsiveLogoContainer]: window.innerWidth < 750,
          })}
        >
          <a href="https://github.com/Sid200026" target="_blank" rel="noreferrer">
            <img
              src="public/images/GitHub-Mark-Light-120px-plus.png"
              alt="github"
              className={clsx(classes.socialLogo, {
                [classes.responsiveSocialLogo]: window.innerWidth < 750,
              })}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sid200026/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="public/images/LI-In-Bug.png"
              alt="linkedin"
              className={clsx(classes.socialLogo, {
                [classes.responsiveSocialLogo]: window.innerWidth < 750,
              })}
            />
          </a>
          <a
            href="https://www.instagram.com/sid26roy/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="public/images/Instagram_AppIcon_Aug2017.png"
              alt="instagram"
              className={clsx(classes.socialLogo, {
                [classes.responsiveSocialLogo]: window.innerWidth < 750,
              })}
            />
          </a>
        </div>
        <Button
          variant="contained"
          color="primary"
          id="completeWebsiteBtn"
          size="large"
          className={clsx(classes.btn, {
            [classes.responsiveBtn]: window.innerWidth < 750,
          })}
          onClick={updateMemeUrl}
        >
          Change Meme
        </Button>
        <img
          src={memeUrl}
          alt="Random meme"
          className={clsx(classes.meme, {
            [classes.responsiveMeme]: window.innerWidth < 750,
          })}
        />
        <Footer />
      </Container>
    </>
  );
};

Complete.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.shape({
      isComplete: PropTypes.bool,
      email: PropTypes.string,
    }),
  }),
};

Complete.defaultProps = {
  location: {
    pathname: '',
    state: {
      isComplete: false,
      email: '',
    },
  },
};

export { Complete };
