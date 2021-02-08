import React from 'react';
import { Router, navigate } from '@reach/router';
import { Edit } from './Editing/Edit.jsx';
import { ScrollToTop } from './ScrollToTop.jsx';
import { Preview } from './Preview/Preview.jsx';
import { Complete } from './Complete.jsx';
import { NotFound } from './NotFound.jsx';
import { Introduction } from './Editing/Introduction.jsx';
import { AboutMe } from './Editing/AboutMe.jsx';
import { WorkExperience } from './Editing/WorkExperience.jsx';
import { Project } from './Editing/Project.jsx';
import { Achievement } from './Editing/Achievement.jsx';
import { Contact } from './Editing/Contact.jsx';
import { Submit } from './Submit.jsx';
import { Template } from './Editing/Template.jsx';
import { HomePage } from './Homepage.jsx';
import '../styles/Generic/CreateWebsite.scss';

const CreateWebsite = () => {
  const updateDisplayMode = () => {
    navigate('/preview', {
      state: { previousAvailable: true, isSubmit: false },
    });
  };

  return (
    <Router id="primaryRouter">
      <ScrollToTop path="/">
        <Preview path="preview" />
        <Complete path="complete" />
        <Edit path="edit" updateDisplayMode={updateDisplayMode}>
          <ScrollToTop path="/">
            <AboutMe path="about" updateDisplayMode={updateDisplayMode} />
            <WorkExperience path="work" updateDisplayMode={updateDisplayMode} />
            <Project path="project" updateDisplayMode={updateDisplayMode} />
            <Achievement path="achievement" updateDisplayMode={updateDisplayMode} />
            <Contact path="contact" updateDisplayMode={updateDisplayMode} />
            <Introduction path="introduction" updateDisplayMode={updateDisplayMode} />
            <Submit path="submit" />
            <Template path="/" />
          </ScrollToTop>
        </Edit>
        <HomePage path="/" />
        <NotFound default />
      </ScrollToTop>
    </Router>
  );
};

export { CreateWebsite };
