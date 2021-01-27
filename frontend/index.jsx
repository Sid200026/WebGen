import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App.jsx';
import { store } from './stores/store';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';
import './styles/Generic/index.scss';

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('WebGen'),
);
