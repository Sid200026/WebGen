import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import PropTypes from 'prop-types';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Container from '@material-ui/core/Container';
import { styles } from '../../styles/stepper';
import '../../styles/Stepper.scss';

const useStyles = makeStyles(styles);

const StepperComp = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { steps, contentList } = props;
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const setActive = (step) => {
    setActiveStep(step);
  };

  const getStepper = () => {
    if (window.innerWidth > 750) {
      return (
        <div className={classes.root}>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className={classes.stepContainer}
          >
            {steps.map((label, index) => (
              <Step
                onClick={() => setActive(index)}
                key={label}
                className={classes.step}
              >
                <StepLabel
                  onClick={() => setActive(index)}
                  classes={{ label: classes.label }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Container align="center" type="xl">
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.btn}
              variant="contained"
              size="large"
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
              className={classes.btn}
              size="large"
            >
              Next
            </Button>
          </Container>
        </div>
      );
    }
    return (
      <MobileStepper
        variant="dots"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        className={(classes.root, classes.stepContainer)}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            className="backnextbtn"
            disabled={activeStep === steps.length - 1}
            variant="outlined"
          >
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            className="backnextbtn"
            variant="outlined"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    );
  };
  const Component = contentList[activeStep];
  return (
    <>
      {getStepper()}
      <div className={classes.formContainer}>
        <Container maxWidth="xl">
          <Component />
        </Container>
      </div>
    </>
  );
};

StepperComp.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  contentList: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export { StepperComp };
