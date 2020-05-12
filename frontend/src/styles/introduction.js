import {
  secondaryColor,
  thirdColor,
  fourthColor,
  fifthColor,
} from '../constants/color';

export const style = () => ({
  heading: {
    color: thirdColor,
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: '2rem',
    paddingTop: '1rem',
    textDecoration: 'underline',
  },
  responsiveHeading: {
    fontSize: '3rem',
  },
  switchBase: {
    color: fourthColor,
  },
  labelEnable: {
    marginTop: '3rem',
    marginleft: '4rem',
    color: fourthColor,
    fontSize: '2rem',
  },
  labelForm: {
    marginleft: '4rem',
    color: fourthColor,
    fontSize: '2rem',
  },
  responsiveLabelEnable: {
    marginLeft: '0.7rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  image: {
    marginTop: '1.4rem',
    width: '96%',
    height: 'auto',
    borderRadius: '30px',
    border: '2px solid white',
  },
  responsiveImage: {
    width: '96%',
    marginTop: '3rem',
  },
  writeUp: {
    color: secondaryColor,
    fontFamily: "'Ubuntu', sans-serif",
    padding: '0% 5%',
  },
  responsiveWriteUp: {
    padding: '0%',
  },
  exampleContainer: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  responsiveExampleContainer: {
    flexDirection: 'column-reverse',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formHeading: {
    color: fifthColor,
    marginTop: '2rem',
  },
  warning: {
    color: secondaryColor,
    marginTop: '2rem',
  },
});
