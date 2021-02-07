import React, { useState } from 'react';
import clsx from 'clsx';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import { style } from '../styles/Generic/submit';
import { postRequest } from '../utils/serviceCalls';
import { localStorageKey } from '../stores/store';
import { reset as resetIntroduction } from '../actions/introduction_action';
import { reset as resetAboutMe } from '../actions/about_me_action';
import { reset as resetWorkExperience } from '../actions/work_experience_action';
import { reset as resetProject } from '../actions/project_action';
import { reset as resetAchievement } from '../actions/achievement_action';
import { warningWidth } from '../constants/writeups/index';

const useStyles = makeStyles(style);

const Submit = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const introductionReducer = useSelector((state) => state.introductionReducer);
  const aboutMeReducer = useSelector((state) => state.aboutMeReducer);
  const workExperienceReducer = useSelector((state) => state.workExperienceReducer);
  const defaultThemeReducer = useSelector((state) => state.defaultThemeReducer);
  const projectReducer = useSelector((state) => state.projectReducer);
  const achievementReducer = useSelector((state) => state.achievementReducer);

  const fireSubmitExceedError = (err) => {
    Swal.fire({
      icon: 'error',
      title: `Too many submissions`,
      text: `${err.response.data}`,
      footer:
        // eslint-disable-next-line max-len
        '<a href="https://github.com/Sid200026/WebGen/blob/master/README.md">Why do I have this issue?</a>',
    });
  };

  const verifyEmail = async (data, errorMessage = '') => {
    const { message } = data;
    const { data: lastData } = data;
    const { email } = lastData;
    const { value: key } = await Swal.fire({
      title: 'Verification key',
      input: 'text',
      html: `<em>${errorMessage.length > 0 ? errorMessage : message}</em>`,
      inputPlaceholder: 'Enter verification key',
      // eslint-disable-next-line consistent-return
      inputValidator: (value) => {
        if (value.length !== 6) {
          return 'Invalid Verification Key';
        }
      },
      showCancelButton: true,
      confirmButtonText: 'Confirm',
    });
    if (key) {
      try {
        await postRequest('/api/submit/verifykey', { email, key });
        const additionalData = {
          rating,
          comment,
        };
        const apiData = {
          introduction: introductionReducer,
          aboutMe: aboutMeReducer,
          workExperience: workExperienceReducer,
          defaultTheme: defaultThemeReducer,
          project: projectReducer,
          additional: additionalData,
          achievement: achievementReducer,
          email,
        };
        await postRequest('/api/submit/submit', apiData);
        localStorage.removeItem(localStorageKey);
        dispatch(resetIntroduction());
        dispatch(resetAboutMe());
        dispatch(resetWorkExperience());
        dispatch(resetProject());
        dispatch(resetAchievement());
        navigate('/complete', { state: { isComplete: true, email } });
      } catch (err) {
        const { response } = err;
        const { status } = response;
        if (status === 429) {
          fireSubmitExceedError(err);
          return;
        }
        const { data: fetchedData } = response;
        const { error } = fetchedData;
        verifyEmail(data, error);
      }
    }
  };

  const fireFailure = (err) => {
    Swal.fire({
      icon: 'error',
      title: `${err}`,
      text: 'Oops. Looks like some error occured. Please try again in some time',
      footer:
        // eslint-disable-next-line max-len
        '<a href="https://github.com/Sid200026/WebGen/blob/master/README.md">Why do I have this issue?</a>',
    });
  };

  const askForEmail = async (result) => {
    if (result.isConfirmed) {
      const { value: email } = await Swal.fire({
        title: 'Your email address',
        input: 'email',
        html: '<em>Your email address will never be published or shared.</em>',
        inputPlaceholder: 'Enter your email address',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
      });
      if (email) {
        try {
          const response = await postRequest('/api/submit/getkey', { email });
          const { status, data } = response;
          if (status === 200) {
            verifyEmail(data);
            return;
          }
        } catch (err) {
          fireFailure(err.response.data.error);
        }
      }
    }
  };

  const confirmOnClick = () => {
    Swal.fire({
      title: 'Save your configuration file',
      html:
        // eslint-disable-next-line max-len
        "In a rare case wherein you don't receive your website within the next 30 minutes, please send a mail to <b>siddharthsingharoy@gmail.com</b> with the configuration file",
      showCancelButton: true,
      confirmButtonText: `Save File`,
    }).then((result) => {
      if (result.isConfirmed) {
        const apiData = {
          introduction: introductionReducer,
          aboutMe: aboutMeReducer,
          workExperience: workExperienceReducer,
          project: projectReducer,
          achievement: achievementReducer,
          defaultTheme: defaultThemeReducer,
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
        askForEmail(result);
      }
    });
  };

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        className={clsx(classes.heading, {
          [classes.responsiveHeading]: window.innerWidth > warningWidth,
        })}
      >
        We&apos;re in the endgame now
      </Typography>
      <Container
        maxWidth="xl"
        className={clsx(classes.innerContainer, {
          [classes.responsiveInnerContainer]: window.innerWidth < warningWidth,
        })}
      >
        <div
          className={clsx(classes.memeContainer, {
            [classes.responsiveMemeContainer]: window.innerWidth < warningWidth,
          })}
        >
          <img
            src="public/images/endgame.jpg"
            alt="Endgame"
            className={clsx(classes.memeImage, {
              [classes.responsiveMemeImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
        <div
          className={clsx(classes.rightInnerContainer, {
            [classes.responsiveRightInnerContainer]: window.innerWidth < warningWidth,
          })}
        >
          <div
            className={clsx(classes.btnContainer, {
              [classes.responsiveBtnContainer]: window.innerWidth < warningWidth,
            })}
          >
            <Button
              variant="contained"
              color="primary"
              id="completeWebsiteBtn"
              startIcon={<CheckCircleOutlineIcon />}
              size="large"
              className={clsx(classes.btn, {
                [classes.responsiveBtn]: window.innerWidth < warningWidth,
              })}
              onClick={confirmOnClick}
            >
              Confirm
            </Button>
            <Button
              variant="contained"
              color="primary"
              id="secondaryBtn"
              startIcon={<VisibilityIcon />}
              size="large"
              className={clsx(classes.btn, {
                [classes.responsiveBtn]: window.innerWidth < warningWidth,
              })}
              onClick={() =>
                navigate('/preview', {
                  state: { previousAvailable: true, isSubmit: true },
                })
              }
            >
              Preview
            </Button>
          </div>
          <Typography
            gutterBottom
            variant="h5"
            align="center"
            className={clsx(classes.rateHeading, {
              [classes.responsiveRateHeading]: window.innerWidth < warningWidth,
            })}
          >
            Rate your experience
          </Typography>
          <Rating
            name="rate"
            size="large"
            precision={0.5}
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Card
            className={clsx(classes.card, {
              [classes.responsiveCard]: window.innerWidth < warningWidth,
            })}
          >
            <TextField
              label="Comment (optional)"
              multiline
              rows={6}
              variant="outlined"
              className={classes.commentBox}
              color="primary"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </Card>
        </div>
      </Container>
    </Container>
  );
};

export { Submit };
