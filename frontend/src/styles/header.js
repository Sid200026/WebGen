import { secondaryColor } from '../constants/color';

const drawerWidth = 290;

const style = (theme) => ({
  root: {
    flexGrow: 1,
  },
  pageLayout: {
    minHeight: '100%',
    width: '100%',
    position: 'relative',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  labelButton: {
    marginLeft: theme.spacing(3),
    fontSize: '1.1rem',
    fontWeight: 400,
  },
  navBar: {
    background: 'rgba(24, 25, 26, 1)',
  },
  navButtons: {
    textAlign: 'right',
    width: '95%',
    marginLeft: 40,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 2,
  },
  drawerPaper: {
    width: drawerWidth,
    background: secondaryColor,
    color: 'rgba(24, 25, 26, 1)',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    paddingTop: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // marginLeft: drawerWidth,
  },
  logo: {
    width: '80px',
    height: 'auto',
    marginRight: '20px',
  },
  logoResponsive: {
    display: 'none',
  },
});

export { style };
