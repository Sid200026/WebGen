import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { style } from '../../../styles/Editing/form';
import {
  footerBackground as footerBackgroundFunc,
  footerBorder as footerBorderFunc,
  footerColor as footerColorFunc,
  footerText as footerTextFunc,
} from '../../../actions/contact_action';
import { FooterInfo } from '../../../constants/writeups/contact';
import { warningWidth } from '../../../constants/writeups/index';

const useStyles = makeStyles(style);

const Footer = () => {
  const classes = useStyles();

  const contactReducer = useSelector((state) => state.contactReducer);
  const { footerColor, footerText, footerBorder, footerBackground } = contactReducer;
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={clsx(classes.exampleContainer, {
          [classes.responsiveExampleContainer]: window.innerWidth < warningWidth,
        })}
      >
        <div className={classes.cardContainer}>
          <Card
            className={clsx(classes.cardClass, {
              [classes.responsiveCardClass]: window.innerWidth < warningWidth,
            })}
          >
            <Typography align="center" variant="h6" style={{ marginBottom: '1rem' }}>
              {FooterInfo.title}
            </Typography>
            <TextField
              variant="outlined"
              label={FooterInfo.field.footerText.label}
              value={footerText}
              onChange={(event) => {
                dispatch(footerTextFunc(event.target.value));
              }}
              fullWidth
              // eslint-disable-next-line max-len
              className={classes.input}
              required
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={footerColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(footerColorFunc(event.target.value));
                  }}
                />
              }
              label={FooterInfo.field.footerColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={footerBackground}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(footerBackgroundFunc(event.target.value));
                  }}
                />
              }
              label={FooterInfo.field.footerBackground.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={footerBorder}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(footerBorderFunc(event.target.value));
                  }}
                />
              }
              label={FooterInfo.field.footerBorder.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            {/* TODO: Add example of greeting here */}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={FooterInfo.image.src}
            alt={FooterInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: window.innerWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { Footer };
