import { primaryColor, secondaryColor, thirdColor } from '../constants/color';

export const style = () => ({
  heading: {
    color: thirdColor,
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: '1.5rem',
    paddingTop: '1rem',
    textDecoration: 'underline',
    fontWeight: 200,
  },
  responsiveHeading: {
    fontSize: '3rem',
  },
  root: {
    minWidth: '20rem',
    background: secondaryColor,
  },
  rootOwn: {
    width: '20rem',
    background: secondaryColor,
  },
  responsiveSpecialTemplate: {
    minWidth: '20rem',
  },
  media: {
    height: 250,
  },
  scratchContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createOwnMedia: {
    width: '80%',
    height: 'auto',
    display: 'block',
  },
  templateContainer: {
    marginTop: '3rem',
  },
  specialTemplate: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  templateName: {
    color: primaryColor,
  },
  templateContent: {
    marginBottom: 0,
    paddingBottom: 0,
  },
});
