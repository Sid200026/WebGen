import React from 'react';
import PropTypes from 'prop-types';

const HomePage = (props) => {
  const { captchaPassed } = props;

  const checkCaptcha = () => {
    captchaPassed(true);
  };
  return (
    <button type="button" onClick={checkCaptcha}>
      Captcha
    </button>
  );
};

HomePage.propTypes = {
  captchaPassed: PropTypes.func.isRequired,
};

export { HomePage };
