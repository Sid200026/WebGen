import { red } from '@material-ui/core/colors';

export const style = (theme) => ({
  root: {
    width: '95%',
    boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    perspective: '1000px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});
