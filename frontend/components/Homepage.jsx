/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import IconButton from '@material-ui/core/IconButton';
import BuildIcon from '@material-ui/icons/Build';
import PollIcon from '@material-ui/icons/Poll';
import HighQualityIcon from '@material-ui/icons/HighQuality';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import DevicesIcon from '@material-ui/icons/Devices';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { getRequest } from '../utils/serviceCalls';

import { style } from '../styles/Generic/homepage';

const Alert = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles(style);

const HomePage = () => {
  const classes = useStyles();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    status: 'info',
  });
  const [data, setData] = useState({
    coffee: 0,
    line: 0,
    built: 0,
    visitor: 0,
    id: 0,
  });

  useEffect(() => {
    getRequest('/statistics').then((response) => {
      if (response.data.data.length === 0) return;
      setData(response.data.data[0]);
    });
  }, []);

  const handleOpen = (message, status) => {
    setSnackbar({ open: true, message, status });
  };

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ open: false, message: '', status: 'info' });
  };

  const gotoNextSection = (className) => {
    document
      .getElementsByClassName(className)[0]
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={snackbar.status}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar>
            <div className={classes.headerIntial}>
              <IconButton
                color="inherit"
                onClick={() => gotoNextSection(classes.homePage)}
              >
                <Typography variant="h6" className={classes.headerTextMain}>
                  WebGen
                </Typography>
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => gotoNextSection(classes.homePage)}
              >
                <Typography variant="subtitle1" className={classes.headerText}>
                  Home
                </Typography>
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => gotoNextSection(classes.about)}
              >
                <Typography variant="subtitle1" className={classes.headerText}>
                  About
                </Typography>
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => gotoNextSection(classes.empty)}
              >
                <Typography variant="subtitle1" className={classes.headerText}>
                  Features
                </Typography>
              </IconButton>
            </div>
            <div className={classes.headerLogo}>
              <a
                href="https://www.linkedin.com/in/sid200026/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton color="inherit">
                  <LinkedInIcon className={classes.headerLogoBtn} />
                </IconButton>
              </a>
              <a
                href="https://www.github.com/Sid200026/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton color="inherit">
                  <GitHubIcon className={classes.headerLogoBtn} />
                </IconButton>
              </a>
              <IconButton
                color="inherit"
                onClick={() => {
                  navigator.clipboard.writeText('siddharthsingharoy@gmail.com');
                  handleOpen('Email address has been copied', 'info');
                }}
              >
                <MailIcon className={classes.headerLogoBtn} />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => {
                  navigator.clipboard.writeText('+91-9051633165');
                  handleOpen('Phone number has been copied', 'info');
                }}
              >
                <PhoneIcon className={classes.headerLogoBtn} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.homePage}>
          <div className={classes.left}>
            <Typography variant="h2" className={classes.productName}>
              WebGen
            </Typography>
            <Typography variant="h6" className={classes.subProductName}>
              WebGen is an open source personal website / portfolio generator which
              provides you with the HTML, CSS and JS files
            </Typography>
            <Button
              variant="contained"
              className={classes.getStartedBtn}
              onClick={() => navigate('/edit')}
            >
              Get Started
            </Button>
          </div>
          <div className={classes.right}>
            <img
              src="/public/logo_inverted.png"
              alt="WebGen"
              className={classes.image}
            />
          </div>
        </div>
        <svg
          style={{ position: 'absolute', bottom: 0 }}
          id="bg-svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#002bdc88" />
              <stop offset="95%" stopColor="#32ded488" />
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 67.34928229665073,142.89473684210526 134.69856459330146,152.78947368421055 242,161 C 349.30143540669854,169.21052631578945 496.555023923445,175.73684210526315 596,177 C 695.444976076555,178.26315789473685 747.0813397129187,174.26315789473682 821,155 C 894.9186602870813,135.73684210526318 991.1196172248804,101.21052631578948 1098,95 C 1204.8803827751196,88.78947368421052 1322.44019138756,110.89473684210526 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#002bdcff" />
              <stop offset="95%" stopColor="#32ded4ff" />
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 79.19617224880383,295.53110047846894 158.39234449760767,325.06220095693783 261,312 C 363.60765550239233,298.93779904306217 489.62679425837325,243.2822966507177 584,219 C 678.3732057416267,194.7177033492823 741.1004784688995,201.80861244019138 844,225 C 946.8995215311005,248.19138755980862 1089.9712918660287,287.48325358851673 1196,297 C 1302.0287081339713,306.51674641148327 1371.0143540669856,286.25837320574163 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
          />
        </svg>
      </div>
      <div className={classes.about}>
        <div className={classes.aboutMeSplit}>
          <div className={classes.aboutLeft}>
            <img
              src="https://raw.githubusercontent.com/Sid200026/WebGen/master/docs/WebGen.png"
              alt="WebGen"
              className={classes.aboutImage}
            />
          </div>
          <div className={classes.aboutRight}>
            <Typography variant="h4" className={classes.aboutTextMain}>
              What is WebGen
            </Typography>
            <Typography variant="subtitle1" className={classes.aboutText}>
              WebGen is an open source personal website / portfolio generator.
              Portfolios or personal websites are a great way to demonstrate the
              competencies you would list on a resume or talk about in an interview —
              they allow you to show and not just tell.
            </Typography>
            <Typography variant="subtitle1" className={classes.aboutText}>
              We provide you with the source code of the website you developed so that
              you&apos;re at liberty to decide what you want to do with it. Mostly you
              would want to host your website somewhere GitHub, Netlify, Render, Vercel
              etc. ( Video guides are present to help you host your website ).
            </Typography>
          </div>
        </div>
        <div className={classes.empty} />
      </div>
      <div className={classes.features}>
        <Typography align="center" variant="h4" className={classes.featureHead}>
          Features
        </Typography>
        <div className={classes.featureSplit}>
          <div className={classes.featureLeft}>
            <div className={classes.featLogo}>
              <BuildIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div className={classes.featText}>
                <h2 className={classes.featTextHead}>Easily Customizable</h2>
                <p className={classes.featTextContent}>
                  WebGen allows you to fully customise the website according to your own
                  needs
                </p>
              </div>
            </div>
            <div className={classes.featLogo}>
              <DevicesIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div className={classes.featText}>
                <h2 className={classes.featTextHead}>Responsive Design</h2>
                <p className={classes.featTextContent}>
                  Websites built using WebGen are optimized for all devices starting
                  from mobile phones, tabs to laptops and desktops
                </p>
              </div>
            </div>
            <div className={classes.featLogo}>
              <BuildIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div className={classes.featText}>
                <h2 className={classes.featTextHead}>Easily Customizable</h2>
                <p className={classes.featTextContent}>
                  WebGen allows you to fully customise the website according to your own
                  needs
                </p>
              </div>
            </div>
          </div>
          <div className={classes.featureMiddle}>
            <img
              src="/public/mobile_homepage.png"
              alt="WebGen"
              className={classes.mobileImage}
            />
          </div>
          <div className={classes.featureRight}>
            <div className={classes.featLogoRight}>
              <PollIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div className={classes.featText}>
                <h2 className={classes.featTextHead}>Optimized SEO</h2>
                <p className={classes.featTextContent}>
                  WebGen is optimised to allow search engines to show it as a top result
                  of searches for a certain keyword
                </p>
              </div>
            </div>
            <div className={classes.featLogoRight}>
              <HighQualityIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div className={classes.featText}>
                <h2 className={classes.featTextHead}>High Quality</h2>
                <p className={classes.featTextContent}>
                  WebGen allows you to design high quality websites which are modern and
                  elegant
                </p>
              </div>
            </div>
            <div className={classes.featLogoRight}>
              <WhatshotIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div className={classes.featText}>
                <h2 className={classes.featTextHead}>Blazingly Fast</h2>
                <p className={classes.featTextContent}>
                  Websites made with WebGen are powered by React and is blazingly fast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.facts}>
        <h1 className={classes.factHead}>Some facts about us</h1>
        <div className={classes.factInfo}>
          <div className={classes.factText}>
            <h1 className={classes.factTextCount}>{data.visitor}</h1>
            <p className={classes.factTextLabel}>Visitors</p>
          </div>
          <div className={classes.factText}>
            <h1 className={classes.factTextCount}>{data.built}</h1>
            <p className={classes.factTextLabel}>Websites developed</p>
          </div>
          <div className={classes.factText}>
            <h1 className={classes.factTextCount}>{data.line} +</h1>
            <p className={classes.factTextLabel}>Lines of Code</p>
          </div>
          <div className={classes.factText}>
            <h1 className={classes.factTextCount}>{data.coffee} +</h1>
            <p className={classes.factTextLabel}>Cups of coffee</p>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <h4 className={classes.footerText}>
          <span style={{ color: '#DDDDE4' }}>Made by</span> Siddharth Singha Roy
        </h4>
      </div>
    </>
  );
};

export { HomePage };
