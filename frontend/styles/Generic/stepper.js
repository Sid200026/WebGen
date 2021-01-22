import { secondaryColor, fifthColor } from '../../constants/color';

const styles = (theme) => ({
  root: {
    marginTop: '2.4rem',
    width: '100%',
  },
  btn: {
    margin: theme.spacing(2),
    width: '8rem',
    background: secondaryColor,
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepContainer: {
    background: 'none',
  },
  label: {
    color: fifthColor,
    fontSize: '1.3 rem',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export { styles };
