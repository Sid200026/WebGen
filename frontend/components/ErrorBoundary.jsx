/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { logErrorToExpress } from '../utils/serviceCalls';
import '../styles/Generic/errorPage.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    logErrorToExpress(error.stack).then().catch();
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>Oops</h1>
              <h2>Something broke</h2>
            </div>
            <h4>Sorry it&apos;s not you, it&apos;s us</h4>
            <h5>
              We will immediately look into this issue. However if this issue came after
              you uploaded a saved config file, it may happen that the file was tampered
              thus resulting in this error. If this is the case, then you would need to{' '}
              <em style={{ color: '#ff005a' }}>reset</em> the configuration from the{' '}
              <em style={{ color: '#ff005a' }}>More</em> tab in the header.
            </h5>
            <a href="/">Homepage</a>
            <a href="mailto: siddharthsingharoy@gmail.com?subject=WebGen Error">
              Contact Us
            </a>
          </div>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ErrorBoundary };
