import React from 'react';
import '../styles/Generic/errorPage.scss';

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <a href="/">Homepage</a>
      </div>
    </div>
  );
};

export { NotFound };
