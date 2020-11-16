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
    fontSize: '2rem',
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
  memeContainer: {
    flex: '0 1 50%',
    minHeight: '100%',
    maxWidth: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  btn: {
    margin: '2rem',
  },
  btnContainer: {
    minHeight: '100%',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rateHeading: {
    color: thirdColor,
    fontFamily: "'Ubuntu', sans-serif",
    marginTop: '1rem',
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
});
