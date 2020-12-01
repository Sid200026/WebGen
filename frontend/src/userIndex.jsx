import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Preview } from './components/Preview/Preview.jsx';
import './styles/index.scss';
import { store } from './stores/store';
import { ErrorBoundary } from './components/UserErrorBoundary.jsx';

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Preview />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('WebGen'),
);
