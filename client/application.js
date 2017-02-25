import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// Import styles for the application
import 'client/styles/app.scss';

let root;
// Function to render the app
const renderApp = () => {
  root = render(<App />, document.body, root);
};

// Hot Module Replacement API
if(module.hot) {
  module.hot.accept('./components/App', renderApp);
}

// Render the app
renderApp();