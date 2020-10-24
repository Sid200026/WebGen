import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
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
      <Container disableGutters maxWidth="xl" className={classes.container}>
        <h1>
          {greetingText && (
            <span style={{ color: greetingColor, fontWeight: 'bold' }}>
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
