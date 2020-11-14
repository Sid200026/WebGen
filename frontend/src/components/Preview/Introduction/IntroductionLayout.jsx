import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Typing } from 'typing-effect-reactjs';
import { getTheme } from '../../ParticleThemes/index';
import { style } from '../../../styles/introduction_preview';

const useStyles = makeStyles(style);

const IntroductionLayout = () => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();
  const introductionReducer = useSelector((state) => state.introductionReducer);
  const {
    greetingText,
    greetingColor,
    nameText,
    nameColor,
    nameBold,
    buttonText,
    buttonBorder,
    buttonColor,
    buttonHoverBG,
    buttonHoverColor,
    hoverEffect,
    specialisationText,
    specialisationColor,
    title,
    favicon,
    metadesc,
    particleTheme,
  } = introductionReducer;
  const borderStyle = `1px solid ${buttonBorder}`;
  let buttonStyle = {};
  if (hoverEffect && hover) {
    buttonStyle = {
      border: borderStyle,
      backgroundColor: buttonHoverBG,
      color: buttonHoverColor,
    };
  } else {
    buttonStyle = {
      border: borderStyle,
      color: buttonColor,
    };
  }

  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {metadesc && <meta name="description" content={metadesc} />}
        {Object.keys(favicon) !== 0 && (
          <link rel="icon" type="image/png" href={favicon.url} />
        )}
      </Helmet>

      <Container disableGutters maxWidth="xl" className={classes.container}>
        <div className={(classes.particleContainer, 'pseudoClass')}>
          {particleTheme && getTheme(particleTheme)}
        </div>
        <h1 className={classes.mainHeading}>
          {greetingText && (
            <span style={{ color: greetingColor, fontWeight: '100' }}>
              {greetingText}
            </span>
          )}
          {nameText && (
            <span
              className={classes.name}
              style={{ color: nameColor, fontWeight: nameBold ? 'bold' : 'normal' }}
            >
              &nbsp;{nameText}
            </span>
          )}
        </h1>
        <span
          style={{ color: specialisationColor }}
          className={classes.specialisationText}
        >
          {specialisationText.length !== 0 && (
            <Typing
              text={specialisationText}
              smartBackspace
              element="h2"
              typeSpeed={92}
              deleteSpeed={50}
              cursorColor={specialisationColor}
              class
            />
          )}
        </span>
        {buttonText && (
          <Button
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            style={buttonStyle}
            className={classes.viewProfileBtn}
            endIcon={<ArrowDownwardIcon />}
            variant="outlined"
          >
            {buttonText}
          </Button>
        )}
      </Container>
    </>
  );
};

export { IntroductionLayout };
