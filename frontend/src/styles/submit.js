import { secondaryColor, thirdColor, fifthColor } from '../constants/color';

export const style = () => ({
  container: {
    marginTop: '1rem',
    width: '100%',
    height: '100%',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heading: {
    color: thirdColor,
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: '1.6rem',
    paddingTop: '1rem',
  },
  responsiveHeading: {
    fontSize: '3rem',
  },
  innerContainer: {
    width: '100%',
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '15px',
    height: '100%',
  },
  responsiveInnerContainer: {
    flexDirection: 'column-reverse',
    padding: 0,
  },
  memeContainer: {
    flex: '0 1 50%',
    minHeight: '100%',
    maxWidth: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  responsiveMemeContainer: {
    margin: '2rem',
    marginBottom: '0.5rem',
    flex: 0,
    width: '100%',
    maxWidth: '100%',
  },
  responsiveMemeImage: {
    width: '100%',
    height: 'auto',
  },
  rightInnerContainer: {
    flex: '0 1 50%',
    minHeight: '100%',
    maxWidth: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  responsiveRightInnerContainer: {
    width: '100%',
    maxWidth: '100%',
    flex: '1',
  },
  btn: {
    margin: '2rem',
  },
  responsiveBtn: {
    margin: '0.6rem',
  },
  btnContainer: {
    minHeight: '100%',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  responsiveBtnContainer: {
    flexDirection: 'column',
  },
  rateHeading: {
    color: thirdColor,
    fontFamily: "'Ubuntu', sans-serif",
    marginTop: '1rem',
  },
  responsiveRateHeading: {
    fontSize: '1.4em',
  },
  commentBox: {
    width: '100%',
    color: fifthColor,
  },
  card: {
    marginTop: '2rem',
    width: '80%',
    padding: '3% 3% 3% 3%',
    background: secondaryColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
  },
  responsiveCard: {
    width: '100%',
  },
});
