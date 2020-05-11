import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { displayMode as displayModeType } from '../constants/constants';
import { Edit } from './Editing/Edit.jsx';
import { Preview } from './Preview/Preview.jsx';
import '../styles/CreateWebsite.scss';

const CreateWebsite = () => {
  const [displayMode, updateDisplayMode] = useState(displayModeType.EDIT);
  if (displayMode === displayModeType.EDIT) {
    return (
      <div className="displayContainer">
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateDisplayMode(displayModeType.PREVIEW)}
          id="editPreviewbtn"
          startIcon={<VisibilityIcon />}
          size="large"
        >
          Preview
        </Button>
        <Edit />
      </div>
    );
  }
  return (
    <div className="displayContainer">
      <Button
        variant="contained"
        color="primary"
        onClick={() => updateDisplayMode(displayModeType.EDIT)}
        id="editPreviewbtn"
        startIcon={<EditIcon />}
        size="large"
      >
        Edit
      </Button>
      <Preview />
    </div>
  );
};

export { CreateWebsite };
