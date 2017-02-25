import React, { render } from 'react';
import App from './components/App';

import 'client/styles/app.scss';

// Get the battery data and render the app
navigator.getBattery().then(data => {
  window.data = data;
});

render(<App />, document.body);