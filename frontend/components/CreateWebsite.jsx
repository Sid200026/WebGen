import React from 'react';
import { Router, navigate } from '@reach/router';
import { Edit } from './Editing/Edit.jsx';
import { ScrollToTop } from './ScrollToTop.jsx';
import { Preview } from './Preview/Preview.jsx';
import { Complete } from './Complete.jsx';
// import { NotFound } from './NotFound.jsx';
import '../styles/Generic/CreateWebsite.scss';

const CreateWebsite = () => {
  return (
    <Router id="primaryRouter">
      <ScrollToTop path="/">
        <Preview path="/preview" />
        <Complete path="/complete" />
        <Edit
          default
          updateDisplayMode={() =>
            navigate('/preview', {
              state: { previousAvailable: true, isSubmit: false },
            })
          }
        />
        {/* <NotFound default /> */}
      </ScrollToTop>
    </Router>
  );
};

export { CreateWebsite };
