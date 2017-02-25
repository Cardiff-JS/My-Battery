import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// Import styles for the application
import 'client/styles/app.scss';

// Variable to keep a reference of the last render for HMR
let root;

// Function to render the app
const renderApp = () => {
  root = render(<App />, document.body, root);
};

// Hot Module Replacement API
if(module.hot) {
  require('preact/devtools');
  module.hot.accept('./components/App', renderApp);
}

// Initial render the app
renderApp();