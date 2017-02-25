import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'client/components/App';
import layoutPage from './layout-page';

const serverRender = (req, res) => {

  const markup = renderToString(<App />);
  const page = layoutPage({
    markup
  });

  res.send(page);
  res.end();
};

export default serverRender;