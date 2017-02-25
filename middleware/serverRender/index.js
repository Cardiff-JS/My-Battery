import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'client/components/App';
import layoutPage from './layout-page';
import defaultData from './default-data';

const serverRender = (req, res) => {

  const markup = renderToString(<App {...defaultData} />);
  const page = layoutPage({
    markup,
    defaultData
  });

  res.send(page);
  res.end();
};

export default serverRender;