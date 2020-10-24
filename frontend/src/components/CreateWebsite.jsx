import React, { useState } from 'react';
import { displayMode as displayModeType } from '../constants/constants';
import { Edit } from './Editing/Edit.jsx';
import { Preview } from './Preview/Preview.jsx';
import '../styles/CreateWebsite.scss';

const CreateWebsite = () => {
  const [displayMode, updateDisplayMode] = useState(displayModeType.PREVIEW);
  if (displayMode === displayModeType.EDIT) {
    return (
      <div className="displayContainer">
        <Edit updateDisplayMode={() => updateDisplayMode(displayModeType.PREVIEW)} />
      </div>
    );
  }
  return (
    <div className="displayContainer">
      <Preview updateDisplayMode={() => updateDisplayMode(displayModeType.EDIT)} />
    </div>
  );
};

export { CreateWebsite };
