import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App';

const serverRender = (req, res) => {
  const markup = renderToString(<App />);

  res.send(`<!DOCTYPE html><html><body>${markup}</body></html>`);
  res.end();
};

export default serverRender;