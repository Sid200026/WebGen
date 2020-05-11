import React from 'react';
import Container from '@material-ui/core/Container';
import { Router } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import { Introduction } from './Introduction.jsx';
import { AboutMe } from './AboutMe.jsx';
import { WorkExperience } from './WorkExperience.jsx';
import { Project } from './Project.jsx';
import { Achievement } from './Achievement.jsx';
import { Contact } from './Contact.jsx';
import { ScrollToTop } from './ScrollToTop.jsx';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';
import { style } from '../../styles/edit';

const useStyles = makeStyles(style);

const Edit = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" disableGutters className={classes.container}>
        <div className={classes.componentContainer}>
          <Header>
            <Router primary={false}>
              <ScrollToTop path="/">
                <AboutMe path="/about" />
                <WorkExperience path="/work" />
                <Project path="/project" />
                <Achievement path="/achievement" />
                <Contact path="/contact" />
                <Introduction default />
              </ScrollToTop>
            </Router>
          </Header>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export { Edit };
