import React from 'react';
import Container from '@material-ui/core/Container';
import { Router } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import { Introduction } from './Introduction.jsx';
import { AboutMe } from './AboutMe.jsx';
import { WorkExperience } from './WorkExperience.jsx';
import { Project } from './Project.jsx';
import { Achievement } from './Achievement.jsx';
import { Contact } from './Contact.jsx';
import { ScrollToTop } from './ScrollToTop.jsx';
import { Submit } from '../Submit.jsx';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';
import { style } from '../../styles/edit';

const useStyles = makeStyles(style);

const Edit = (props) => {
  const classes = useStyles();
  const { updateDisplayMode } = props;
  return (
    <>
      <Container maxWidth="xl" disableGutters className={classes.container}>
        <div className={classes.componentContainer}>
          <Header>
            <Router primary={false}>
              <ScrollToTop path="/">
                <AboutMe path="/about" updateDisplayMode={updateDisplayMode} />
                <WorkExperience path="/work" updateDisplayMode={updateDisplayMode} />
                <Project path="/project" updateDisplayMode={updateDisplayMode} />
                <Achievement
                  path="/achievement"
                  updateDisplayMode={updateDisplayMode}
                />
                <Contact path="/contact" updateDisplayMode={updateDisplayMode} />
                <Submit path="/submit" />
                <Introduction default updateDisplayMode={updateDisplayMode} />
              </ScrollToTop>
            </Router>
          </Header>
        </div>
        <Footer />
      </Container>
    </>
  );
};

Edit.propTypes = {
  updateDisplayMode: PropTypes.func.isRequired,
};

export { Edit };
