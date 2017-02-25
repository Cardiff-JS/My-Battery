import React from 'react';
import { render } from 'preact';
import App from './components/App';

// Import styles for the application
import 'client/styles/app.scss';

// Function to render the app
const renderApp = () => {
  render(<App />, document.getElementById('application'));
};

// Hot Module Replacement API
if(module.hot) {
  module.hot.accept('./components/App', renderApp);
}

// Render the app
renderApp();