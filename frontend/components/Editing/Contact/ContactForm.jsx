import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import { style } from '../../../styles/Editing/form';
import {
  formBackground as formBackgroundFunc,
  formColor as formColorFunc,
  formspreeLink as formspreeLinkFunc,
} from '../../../actions/contact_action';
import { FormInfo } from '../../../constants/writeups/contact';
import { warningWidth } from '../../../constants/writeups/index';
import { useWindowSize } from '../../Hooks/windowHook.jsx';

const useStyles = makeStyles(style);

const ContactForm = () => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();

  const contactReducer = useSelector((state) => state.contactReducer);
  const { formBackground, formColor, formSpreeLink } = contactReducer;
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={clsx(classes.exampleContainer, {
          [classes.responsiveExampleContainer]: windowWidth < warningWidth,
        })}
      >
        <div className={classes.cardContainer}>
          <Card
            className={clsx(classes.cardClass, {
              [classes.responsiveCardClass]: windowWidth < warningWidth,
            })}
          >
            <Typography align="center" variant="h6" style={{ marginBottom: '1rem' }}>
              {FormInfo.title}
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              color="primary"
              style={{ marginBottom: '1rem' }}
            >
              {FormInfo.help}
            </Typography>
            <Link
              href={FormInfo.formSpree.link}
              style={{ marginBottom: '1rem' }}
              rel="noreferrer"
              target="_blank"
            >
              {FormInfo.formSpree.text}
            </Link>
            <TextField
              variant="outlined"
              label={FormInfo.field.formSpree.label}
              value={formSpreeLink}
              onChange={(event) => {
                dispatch(formspreeLinkFunc(event.target.value));
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
                  value={formBackground}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(formBackgroundFunc(event.target.value));
                  }}
                />
              }
              label={FormInfo.field.formBackground.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            <FormControlLabel
              value="top"
              control={
                <input
                  type="color"
                  list="true"
                  value={formColor}
                  style={{
                    width: '8rem',
                    height: '2rem',
                    marginTop: '5px',
                  }}
                  onChange={(event) => {
                    dispatch(formColorFunc(event.target.value));
                  }}
                />
              }
              label={FormInfo.field.formColor.label}
              labelPlacement="top"
              classes={{ label: classes.formControl }}
            />
            {/* TODO: Add example of greeting here */}
          </Card>
        </div>
        <div className={classes.cardContainer}>
          <img
            src={FormInfo.image.src}
            alt={FormInfo.image.alt}
            className={clsx(classes.image, {
              [classes.responsiveImage]: windowWidth < warningWidth,
            })}
          />
        </div>
      </div>
    </>
  );
};

export { ContactForm };
