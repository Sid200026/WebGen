import React, { useState } from 'react';
import { CreateWebsite } from './CreateWebsite.jsx';
import { HomePage } from './Homepage.jsx';

const App = () => {
  const [hasCaptchaPassed, updateStatus] = useState(true);
  if (hasCaptchaPassed) {
    return <CreateWebsite />;
  }
  return <HomePage captchaPassed={(response) => updateStatus(response)} />;
};

export { App };
