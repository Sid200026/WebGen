import React, { useState } from 'react';
import clsx from 'clsx';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
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
import { style } from '../styles/submit';
import { postRequest } from '../utils/serviceCalls';

const useStyles = makeStyles(style);

const Submit = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const classes = useStyles();
  const introductionReducer = useSelector((state) => state.introductionReducer);

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
          additional: additionalData,
          email,
        };
        await postRequest('/api/submit/submit', apiData);
        navigate('/complete', { state: { isComplete: true, email } });
      } catch (err) {
        const { response } = err;
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
      title: 'Do you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: `Confirm`,
    }).then(askForEmail);
  };

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        className={clsx(classes.heading, {
          [classes.responsiveHeading]: window.innerWidth > 750,
        })}
      >
        We&apos;re in the endgame now
      </Typography>
      <Container
        maxWidth="xl"
        className={clsx(classes.innerContainer, {
          [classes.responsiveInnerContainer]: window.innerWidth < 750,
        })}
      >
        <div
          className={clsx(classes.memeContainer, {
            [classes.responsiveMemeContainer]: window.innerWidth < 750,
          })}
        >
          <img
            src="public/images/endgame.jpg"
            alt="Endgame"
            className={clsx(classes.memeImage, {
              [classes.responsiveMemeImage]: window.innerWidth < 750,
            })}
          />
        </div>
        <div
          className={clsx(classes.rightInnerContainer, {
            [classes.responsiveRightInnerContainer]: window.innerWidth < 750,
          })}
        >
          <div
            className={clsx(classes.btnContainer, {
              [classes.responsiveBtnContainer]: window.innerWidth < 750,
            })}
          >
            <Button
              variant="contained"
              color="primary"
              id="completeWebsiteBtn"
              startIcon={<CheckCircleOutlineIcon />}
              size="large"
              className={clsx(classes.btn, {
                [classes.responsiveBtn]: window.innerWidth < 750,
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
                [classes.responsiveBtn]: window.innerWidth < 750,
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
              [classes.responsiveRateHeading]: window.innerWidth < 750,
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
              [classes.responsiveCard]: window.innerWidth < 750,
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
