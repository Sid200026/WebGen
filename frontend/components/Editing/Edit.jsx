import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';
import { style } from '../../styles/Editing/edit';

const useStyles = makeStyles(style);

const Edit = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <>
      <Helmet>
        <title>Webgen</title>
        <meta name="description" content="An open source personal website generator" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
      </Helmet>
      <Container maxWidth="xl" disableGutters className={classes.container}>
        <div className={classes.componentContainer}>
          <Header>{children}</Header>
        </div>
        <Footer />
      </Container>
    </>
  );
};

Edit.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Edit };
