import React from 'react';
import PropTypes from 'prop-types';
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
              <h2>Something Broke</h2>
            </div>
            <a href="/">Homepage</a>
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
