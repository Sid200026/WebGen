import { thirdColor, fourthColor, fifthColor } from '../constants/color';

export const style = () => ({
  container: {
    width: '100%',
    minHeight: '100%',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  heading: {
    color: thirdColor,
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: '1.6rem',
    textDecoration: 'underline',
  },
  responsiveHeading: {
    fontSize: '3rem',
  },
  secondaryMsg: {
    color: fifthColor,
    fontFamily: "'Ubuntu', sans-serif",
    margin: 0,
    padding: 0,
  },
  responsiveSecondaryMsg: {
    fontSize: '1rem',
    marginTop: '1rem',
  },
  email: {
    color: fourthColor,
  },
  logo: {
    width: '15rem',
    height: 'auto',
  },
  lastMsg: {
    color: fifthColor,
    marginBottom: '2rem',
    fontFamily: "'Ubuntu', sans-serif",
  },
  meme: {
    marginTop: '1rem',
    marginBottom: '4rem',
    width: '30rem',
    height: 'auto',
    border: `4px solid ${fourthColor}`,
  },
  responsiveMeme: {
    width: '95%',
    height: 'auto',
  },
  btn: {
    marginTop: '4rem',
  },
  responsiveBtn: {
    margin: '0.6rem',
  },
  particleContainer: {
    width: '100%',
    minHeight: '100%',
    position: 'fixed',
    zIndex: 0,
  },
  logoContainer: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '1rem',
    marginTop: '1.5rem',
  },
  responsiveLogoContainer: {
    marginTop: '1rem',
    width: '100%',
  },
  socialLogo: {
    width: '3.5rem',
    height: 'auto',
  },
  responsiveSocialLogo: {
    width: '2.5rem',
  },
});
