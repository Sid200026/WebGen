import { fourthColor, secondaryColor } from '../../constants/color';

export const style = () => ({
  formHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem 0rem',
    width: '100%',
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardClass: {
    width: '70%',
    padding: '4% 5% 6% 5%',
    background: secondaryColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
  },
  responsiveCardClass: {
    width: '100%',
    marginTop: '35px',
    padding: '5% 5% 10% 5%',
  },
  input: {
    color: fourthColor,
    marginTop: '2rem',
  },
  select: {
    marginTop: '2rem',
    width: '15rem',
  },
  color: {
    width: '2rem',
    height: '2rem',
  },
  image: {
    width: '70%',
    height: 'auto',
    borderRadius: '30px',
    border: '2px solid white',
  },
  particle: {
    border: '2px solid yellow',
    borderRadius: '0px',
  },
  responsiveImage: {
    width: '100%',
    marginTop: '3rem',
  },
  exampleContainer: {
    width: '100%',
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '15px',
  },
  responsiveExampleContainer: {
    flexDirection: 'column',
    marginTop: '0.5rem',
  },
  switchBase: {
    color: fourthColor,
  },
  formControl: {
    fontSize: '1.1rem',
    color: '#615F5E',
    marginTop: '15px',
    marginBottom: '10px',
  },
  list: {
    width: '100%',
    alignContent: 'flex-start',
  },
});
