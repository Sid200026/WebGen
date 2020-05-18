import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { ErrorBoundary } from './components/UserErrorBoundary.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <h1>User</h1>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('WebGen'),
);
