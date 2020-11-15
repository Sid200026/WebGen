import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { IntroductionLayout } from './Introduction/IntroductionLayout.jsx';
import '../../styles/preview.scss';

const Preview = (props) => {
  const { updateDisplayMode } = props;
  const introductionReducer = useSelector((state) => state.introductionReducer);
  const { enable: introductionEnable } = introductionReducer;
  return (
    <>
      <div className="preview__container">
        <Button
          variant="contained"
          color="primary"
          onClick={updateDisplayMode}
          className="preview__goBackbtn"
          id="editPreviewbtn"
          startIcon={<EditIcon />}
          size="large"
        >
          Edit
        </Button>
        {introductionEnable && <IntroductionLayout />}
      </div>
    </>
  );
};

Preview.propTypes = {
  updateDisplayMode: PropTypes.func.isRequired,
};

export { Preview };
