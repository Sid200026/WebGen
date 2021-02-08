const style = (theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    minHeight: '100%',
    background: 'white',
    fontFamily: "'Ubuntu', sans-serif",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    background: '#dddde4',
  },
  drawerPaper: {
    background: '#dddde4',
  },
  headerTextMain: {
    color: '#122F6B',
    marginLeft: '7rem',
  },
  headerText: {
    color: '#122F6B',
    marginLeft: '1rem',
  },
  headerIntial: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  headerLogo: {
    marginRight: '2rem',
  },
  headerLogoBtn: {
    color: '#122F6B',
    marginRight: '15px',
  },
  responsiveHeaderLogoBtn: {
    marginRight: '3px',
    color: '#122F6B',
  },
  homePage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '7rem',
    position: 'relative',
  },
  responsiveHomePage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '6rem',
    position: 'relative',
  },
  left: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 10,
  },
  responsiveLeft: {
    width: '100%',
  },
  productName: {
    color: '#122F6B',
    fontWeight: 900,
    marginBottom: '1.6rem',
  },
  responsiveProductName: {
    fontSize: '3rem',
  },
  subProductName: {
    width: '60%',
    fontSize: '16px',
    color: '#9E9E9E',
    textAlign: 'center',
    fontWeight: 100,
  },
  responsiveSubProductName: {
    width: '90%',
  },
  right: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 10,
  },
  responsiveRight: {
    width: '100%',
    justifyContent: 'center',
  },
  image: {
    width: '60%',
    height: 'auto',
    zIndex: 10,
    marginTop: '2rem',
  },
  responsiveImage: {
    width: '100%',
    marginTop: '0px',
  },
  getStartedBtn: {
    marginTop: '1.4rem',
    background: 'transparent',
    border: '1px solid black',
    borderRadius: '10px',
    width: '150px',
  },
  about: {
    paddingTop: '7rem',
    background: 'white',
    width: '100%',
  },
  responsiveAbout: {
    paddingTop: '2rem',
  },
  aboutMeSplit: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  responsiveAboutMeSplit: {
    flexDirection: 'column',
  },
  aboutLeft: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  responsiveAboutLeft: {
    width: '100%',
  },
  aboutRight: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  responsiveAboutRight: {
    width: '100%',
    alignItems: 'center',
  },
  aboutImage: {
    width: '75%',
    height: 'auto',
  },
  responsiveAboutImage: {
    width: '90%',
  },
  aboutTextMain: {
    width: '80%',
    fontWeight: 500,
    fontSize: '25px',
    marginBottom: '2rem',
  },
  responsiveAboutTextMain: {
    marginTop: '1.6rem',
    textAlign: 'center',
  },
  aboutText: {
    width: '80%',
    fontWeight: 100,
    fontSize: '15px',
    marginBottom: '1rem',
    color: '#9E9E9E',
  },
  responsiveAboutText: {
    width: '90%',
  },
  empty: {
    height: '7.3rem',
    width: '70%',
    marginLeft: '15%',
    borderBottom: '1px solid #9E9E9E',
  },
  responsiveEmpty: {
    height: '3rem',
  },
  featureHead: {
    color: '#122F6B',
    marginBottom: '3rem',
  },
  features: {
    paddingTop: '3rem',
    background: 'white',
    width: '100%',
    paddingBottom: '3rem',
  },
  featureSplit: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  responsiveFeatureSplit: {
    flexDirection: 'column',
  },
  featureLeft: {
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  responsiveFeatureLeft: {
    width: '100%',
  },
  featureRight: {
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  responsiveFeatureRight: {
    width: '100%',
  },
  featureMiddle: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
  },
  mobileImage: {
    width: '80%',
    height: 'auto',
  },
  featLogo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '3rem',
  },
  responsiveFeatLogo: {
    justifyContent: 'space-evenly',
    width: '90%',
  },
  featLogoRight: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '3rem',
  },
  responsiveFeatLogoRight: {
    justifyContent: 'space-evenly',
    width: '90%',
  },
  featText: {
    marginLeft: '2rem',
    width: '50%',
  },
  responsiveFeatText: {
    width: '100%',
  },
  featTextHead: {
    color: '#122F6B',
    fontWeight: 800,
    fontSize: '20px',
    marginBottom: '1rem',
  },
  featTextContent: {
    color: '#9E9E9E',
    fontSize: '15px',
    fontWeight: 100,
  },
  facts: {
    backgroundImage: 'linear-gradient(to right, #F57F84, #E96498)',
    opacity: '0.95',
    paddingBottom: '8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  responsiveFacts: {
    padding: '1.5rem',
  },
  factHead: {
    marginTop: '5rem',
    color: 'white',
    marginBottom: '4.5rem',
  },
  responsiveFactHead: {
    marginTop: '1.1rem',
    marginBottom: '2rem',
    textAlign: 'center',
    fontSize: '33px',
  },
  factInfo: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  responsiveFactInfo: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  factText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '25px',
  },
  factTextCount: {
    color: 'white',
    fontSize: '40px',
    fontWe: 300,
    marginBottom: '0.7rem',
  },
  responsiveFactTextCount: {
    marginBottom: '0.4rem',
    fontSize: '30px',
  },
  factTextLabel: {
    color: 'white',
    fontWeight: 100,
  },
  footer: {
    background: '#161D27',
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '1rem',
  },
  footerInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontWeight: 100,
    fontSize: '15px',
  },
});

export { style };
