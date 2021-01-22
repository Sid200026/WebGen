import { secondaryColor } from '../../constants/color';

const drawerWidth = 290;

const style = (theme) => ({
  root: {
    flexGrow: 1,
  },
  pageLayout: {
    minHeight: '100%',
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  labelButton: {
    marginLeft: '0.5rem',
    fontSize: '1rem',
    fontWeight: 400,
  },
  navBar: {
    position: 'sticky',
    zIndex: 98,
  },
  navButtons: {
    textAlign: 'left',
    width: '100%',
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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
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
  specialBtn: {
    marginLeft: '0.6rem',
    fontSize: '1.1rem',
    fontWeight: 400,
    color: 'rgb(149, 245, 66)',
  },
});

export { style };
