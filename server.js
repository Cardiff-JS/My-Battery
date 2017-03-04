/**
 * @author - Jack Rimell, @silverlight513
 */

require('babel-register');

// Import dependancies and create app
const express = require('express');
const webpack = require('webpack');
const compression = require('compression');
const bodyParser = require('body-parser');

const serverRender = require('./middleware/serverRender').default;
const serveManifest = require('./middleware/serveManifest').default;

// Create the app
const app = express();

// Configure express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());



// Change the powered by header
// ----------------------------------------
app.use((req, res, next) => {
  res.header('X-powered-by', 'Your friendly neighbourhood spiderman');
  next();
});



// Set up the webpack env
// ----------------------------------------
if(process.env.NODE_ENV !== 'production') {
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    serverSideRender: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use('/static', express.static(`${__dirname}/dist`, {maxAge:'365d'}));
}



// Create the FE routes
// ----------------------------------------
const router = express.Router();

router.get('/manifest.json', serveManifest);
router.get('*', serverRender);

app.use('/', router);



// Run the server
// ----------------------------------------
app.listen('3000', '0.0.0.0', err => {
  if(err) {
    console.error(err);
    process.exit(0);
  }

  console.info('Running server at http://localhost:3000');
});