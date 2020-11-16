export const style = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    width: '100%',
    background: 'red',
    position: 'absolute',
  },
  viewProfileBtn: {
    position: 'absolute',
    bottom: '3rem',
  },
  specialisationText: {
    marginTop: '0.5rem',
    zIndex: 1,
  },
  mainHeading: {
    fontSize: '2.5rem',
    zIndex: 1,
  },
  particleContainer: {
    width: '100%',
    minHeight: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  responsiveMainHeading: {
    fontSize: '1.5rem',
  },
  responsiveSpecialisationText: {
    fontSize: '1.2rem',
    marginTop: '0.5rem',
  },
});
