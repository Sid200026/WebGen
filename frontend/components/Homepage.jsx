/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Drawer from '@material-ui/core/Drawer';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import IconButton from '@material-ui/core/IconButton';
import BuildIcon from '@material-ui/icons/Build';
import PollIcon from '@material-ui/icons/Poll';
import HighQualityIcon from '@material-ui/icons/HighQuality';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import DevicesIcon from '@material-ui/icons/Devices';
import Button from '@material-ui/core/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Snackbar from '@material-ui/core/Snackbar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import MuiAlert from '@material-ui/lab/Alert';
import MenuIcon from '@material-ui/icons/Menu';
import { getRequest } from '../utils/serviceCalls';
import { warningWidth } from '../constants/writeups/index';
import { style } from '../styles/Generic/homepage';
import { useWindowSize } from './Hooks/windowHook.jsx';

const Alert = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles(style);

const HomePage = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();
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
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    if (open) setOpen(false);
  };

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
    handleDrawerClose();
  };

  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={snackbar.status}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      <div className={classes.root}>
        {windowWidth > 1000 && (
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
                  style={{ textDecoration: 'none' }}
                >
                  <IconButton color="inherit">
                    <LinkedInIcon className={classes.headerLogoBtn} />
                  </IconButton>
                </a>
                <a
                  href="https://www.github.com/Sid200026/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
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
        )}
        {windowWidth <= 1000 && (
          <>
            <AppBar position="fixed" className={classes.header}>
              <Toolbar>
                <IconButton
                  edge="start"
                  style={{ color: 'black' }}
                  aria-label="menu"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
                <IconButton onClick={() => gotoNextSection(classes.homePage)}>
                  <Typography
                    variant="h6"
                    className={classes.headerTextMain}
                    style={{ marginLeft: '1rem' }}
                  >
                    WebGen
                  </Typography>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="top"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  <KeyboardArrowUpIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem button onClick={() => gotoNextSection(classes.homePage)}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => gotoNextSection(classes.about)}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button onClick={() => gotoNextSection(classes.empty)}>
                  <ListItemText primary="Features" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem>
                  <ListItemIcon
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/sid200026/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <IconButton color="inherit">
                        <LinkedInIcon className={classes.responsiveHeaderLogoBtn} />
                      </IconButton>
                    </a>
                    <a
                      href="https://www.github.com/Sid200026/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <IconButton color="inherit">
                        <GitHubIcon className={classes.responsiveHeaderLogoBtn} />
                      </IconButton>
                    </a>
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        navigator.clipboard.writeText('siddharthsingharoy@gmail.com');
                        handleOpen('Email address has been copied', 'info');
                      }}
                    >
                      <MailIcon className={classes.responsiveHeaderLogoBtn} />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        navigator.clipboard.writeText('+91-9051633165');
                        handleOpen('Phone number has been copied', 'info');
                      }}
                    >
                      <PhoneIcon className={classes.responsiveHeaderLogoBtn} />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
        <div
          className={clsx(classes.homePage, {
            [classes.responsiveHomePage]: windowWidth < 1000,
          })}
        >
          <div
            className={clsx(classes.left, {
              [classes.responsiveLeft]: windowWidth < 1000,
            })}
          >
            <Typography
              variant="h2"
              className={clsx(classes.productName, {
                [classes.responsiveProductName]: windowWidth < 1000,
              })}
            >
              WebGen
            </Typography>
            <Typography
              variant="h6"
              className={clsx(classes.subProductName, {
                [classes.responsiveSubProductName]: windowWidth < 1000,
              })}
            >
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
          <div
            className={clsx(classes.right, {
              [classes.responsiveRight]: windowWidth < 1000,
            })}
          >
            <img
              src="/public/logo_inverted.png"
              alt="WebGen"
              className={clsx(classes.image, {
                [classes.responsiveImage]: windowWidth < 1000,
              })}
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
      <div
        className={clsx(classes.about, {
          [classes.responsiveAbout]: windowWidth < warningWidth,
        })}
      >
        <div
          className={clsx(classes.aboutMeSplit, {
            [classes.responsiveAboutMeSplit]: windowWidth < warningWidth,
          })}
        >
          <div
            className={clsx(classes.aboutLeft, {
              [classes.responsiveAboutLeft]: windowWidth < warningWidth,
            })}
          >
            <img
              src="https://raw.githubusercontent.com/Sid200026/WebGen/master/docs/WebGen.png"
              alt="WebGen"
              className={clsx(classes.aboutImage, {
                [classes.responsiveAboutImage]: windowWidth < warningWidth,
              })}
            />
          </div>
          <div
            className={clsx(classes.aboutRight, {
              [classes.responsiveAboutRight]: windowWidth < warningWidth,
            })}
          >
            <Typography
              variant="h4"
              className={clsx(classes.aboutTextMain, {
                [classes.responsiveAboutTextMain]: windowWidth < warningWidth,
              })}
            >
              What is WebGen
            </Typography>
            <Typography
              variant="subtitle1"
              className={clsx(classes.aboutText, {
                [classes.responsiveAboutText]: windowWidth < warningWidth,
              })}
            >
              WebGen is an open source personal website / portfolio generator.
              Portfolios or personal websites are a great way to demonstrate the
              competencies you would list on a resume or talk about in an interview —
              they allow you to show and not just tell.
            </Typography>
            <Typography
              variant="subtitle1"
              className={clsx(classes.aboutText, {
                [classes.responsiveAboutText]: windowWidth < warningWidth,
              })}
            >
              We provide you with the source code of the website you developed so that
              you&apos;re at liberty to decide what you want to do with it. Mostly you
              would want to host your website somewhere GitHub, Netlify, Render, Vercel
              etc. ( Video guides are present to help you host your website ).
            </Typography>
          </div>
        </div>
        <div
          className={clsx(classes.empty, {
            [classes.responsiveEmpty]: windowWidth < warningWidth,
          })}
        />
      </div>
      <div className={classes.features}>
        <Typography align="center" variant="h4" className={classes.featureHead}>
          Features
        </Typography>
        <div
          className={clsx(classes.featureSplit, {
            [classes.responsiveFeatureSplit]: windowWidth < warningWidth,
          })}
        >
          <div
            className={clsx(classes.featureLeft, {
              [classes.responsiveFeatureLeft]: windowWidth < warningWidth,
            })}
          >
            <div
              className={clsx(classes.featLogo, {
                [classes.responsiveFeatLogo]: windowWidth < warningWidth,
              })}
            >
              <BuildIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div
                className={clsx(classes.featText, {
                  [classes.responsiveFeatText]: windowWidth < warningWidth,
                })}
              >
                <h2 className={classes.featTextHead}>Easily Customizable</h2>
                <p className={classes.featTextContent}>
                  WebGen allows you to fully customise the website according to your own
                  needs
                </p>
              </div>
            </div>
            <div
              className={clsx(classes.featLogo, {
                [classes.responsiveFeatLogo]: windowWidth < warningWidth,
              })}
            >
              <DevicesIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div
                className={clsx(classes.featText, {
                  [classes.responsiveFeatText]: windowWidth < warningWidth,
                })}
              >
                <h2 className={classes.featTextHead}>Responsive Design</h2>
                <p className={classes.featTextContent}>
                  Websites built using WebGen are optimized for all devices starting
                  from mobile phones, tabs to laptops and desktops
                </p>
              </div>
            </div>
            <div
              className={clsx(classes.featLogo, {
                [classes.responsiveFeatLogo]: windowWidth < warningWidth,
              })}
            >
              <BuildIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div
                className={clsx(classes.featText, {
                  [classes.responsiveFeatText]: windowWidth < warningWidth,
                })}
              >
                <h2 className={classes.featTextHead}>Easily Customizable</h2>
                <p className={classes.featTextContent}>
                  WebGen allows you to fully customise the website according to your own
                  needs
                </p>
              </div>
            </div>
          </div>
          {windowWidth >= warningWidth && (
            <div className={classes.featureMiddle}>
              <img
                src="/public/mobile_homepage.png"
                alt="WebGen"
                className={classes.mobileImage}
              />
            </div>
          )}
          <div
            className={clsx(classes.featureRight, {
              [classes.responsiveFeatureRight]: windowWidth < warningWidth,
            })}
          >
            <div
              className={clsx(classes.featLogoRight, {
                [classes.responsiveFeatLogoRight]: windowWidth < warningWidth,
              })}
            >
              <PollIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div
                className={clsx(classes.featText, {
                  [classes.responsiveFeatText]: windowWidth < warningWidth,
                })}
              >
                <h2 className={classes.featTextHead}>Optimized SEO</h2>
                <p className={classes.featTextContent}>
                  WebGen is optimised to allow search engines to show it as a top result
                  of searches for a certain keyword
                </p>
              </div>
            </div>
            <div
              className={clsx(classes.featLogoRight, {
                [classes.responsiveFeatLogoRight]: windowWidth < warningWidth,
              })}
            >
              <HighQualityIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div
                className={clsx(classes.featText, {
                  [classes.responsiveFeatText]: windowWidth < warningWidth,
                })}
              >
                <h2 className={classes.featTextHead}>High Quality</h2>
                <p className={classes.featTextContent}>
                  WebGen allows you to design high quality websites which are modern and
                  elegant
                </p>
              </div>
            </div>
            <div
              className={clsx(classes.featLogoRight, {
                [classes.responsiveFeatLogoRight]: windowWidth < warningWidth,
              })}
            >
              <WhatshotIcon style={{ color: '#5BAFE0', fontSize: '30px' }} />
              <div
                className={clsx(classes.featText, {
                  [classes.responsiveFeatText]: windowWidth < warningWidth,
                })}
              >
                <h2 className={classes.featTextHead}>Blazingly Fast</h2>
                <p className={classes.featTextContent}>
                  Websites made with WebGen are powered by React and is blazingly fast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(classes.facts, {
          [classes.responsiveFacts]: windowWidth < warningWidth,
        })}
      >
        <h1
          className={clsx(classes.factHead, {
            [classes.responsiveFactHead]: windowWidth < warningWidth,
          })}
        >
          Some facts about us
        </h1>
        <div
          className={clsx(classes.factInfo, {
            [classes.responsiveFactInfo]: windowWidth < warningWidth,
          })}
        >
          <div className={classes.factText}>
            <h1
              className={clsx(classes.factTextCount, {
                [classes.responsiveFactTextCount]: windowWidth < warningWidth,
              })}
            >
              {data.visitor}
            </h1>
            <p className={classes.factTextLabel}>Visitors</p>
          </div>
          <div className={classes.factText}>
            <h1
              className={clsx(classes.factTextCount, {
                [classes.responsiveFactTextCount]: windowWidth < warningWidth,
              })}
            >
              {data.built}
            </h1>
            <p className={classes.factTextLabel}>Websites developed</p>
          </div>
          <div className={classes.factText}>
            <h1
              className={clsx(classes.factTextCount, {
                [classes.responsiveFactTextCount]: windowWidth < warningWidth,
              })}
            >
              {data.line} +
            </h1>
            <p className={classes.factTextLabel}>Lines of Code</p>
          </div>
          <div className={classes.factText}>
            <h1
              className={clsx(classes.factTextCount, {
                [classes.responsiveFactTextCount]: windowWidth < warningWidth,
              })}
            >
              {data.coffee} +
            </h1>
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
