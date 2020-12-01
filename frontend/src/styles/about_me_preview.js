export const style = () => ({
  svgProfile: {
    width: '21rem',
  },
  aboutMeContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingBottom: '2rem',
  },
  responsiveAboutMeContainer: {
    flexDirection: 'column',
  },
  innerContainer: {
    display: 'flex',
    flex: 1,
    width: '50%',
    minHeight: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  responsiveInnerContainer: {
    width: '100%',
  },
  descriptionText: {
    width: '35rem',
    marginTop: '1.5rem',
  },
  responsiveDescriptionText: {
    width: '95%',
  },
  resumeView: {
    marginTop: '2rem',
    borderRadius: '5%',
    fontWeight: 'bold',
  },
  aboutMeLayout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  pageHeadline: {
    fontSize: '3rem',
    fontWeight: 200,
    textDecoration: 'underline',
    marginBottom: '3rem',
    fontFamily: "'Ubuntu', sans-serif",
  },
  responsivePageHeadline: {
    marginBottom: '1.8rem',
  },
  mediaHandles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  socialButton: {
    margin: '1.4rem',
    width: '10rem',
    height: '3rem',
    border: '0.05rem solid black',
  },
  logoImage: {
    width: '30px',
    height: 'auto',
  },
  responsiveLogoImage: {
    width: '45px',
    height: 'auto',
    margin: '1.2rem',
  },
  customLogoLight: {
    border: '1px solid black',
    padding: '9px',
    textDecoration: 'none',
    fontSize: ' 19px',
    color: 'black',
    margin: '1.2rem',
    borderRadius: '25%',
  },
  customLogoDark: {
    border: '1px solid white',
    padding: '9px',
    textDecoration: 'none',
    fontSize: ' 19px',
    color: 'white',
    margin: '1.2rem',
    background: 'black',
    borderRadius: '25%',
  },
});
