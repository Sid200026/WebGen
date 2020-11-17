import React, { useState } from 'react';
import clsx from 'clsx';
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

const useStyles = makeStyles(style);

const Submit = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const classes = useStyles();

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
            >
              Continue
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
