import React from 'react';
import { Router, navigate } from '@reach/router';
import { Edit } from './Editing/Edit.jsx';
import { ScrollToTop } from './ScrollToTop.jsx';
import { Preview } from './Preview/Preview.jsx';
import '../styles/CreateWebsite.scss';

const CreateWebsite = () => {
  return (
    <Router id="primaryRouter">
      <ScrollToTop path="/">
        <Preview path="/preview" />
        <Edit
          default
          updateDisplayMode={() =>
            navigate('/preview', {
              state: { previousAvailable: true, isSubmit: false },
            })
          }
        />
      </ScrollToTop>
    </Router>
  );
};

export { CreateWebsite };
