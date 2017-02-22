/**
 * Server.js to run the node server
 *
 * @author - Jack Rimell, @silverlight513
 */

require('babel-register');

// Import dependancies and create app
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const compression = require('compression');
const bodyParser = require('body-parser');
// Create the app
const app = express();

// Configure 3rd party middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.use((req, res, next) => {
  res.header("X-powered-by", "Blood, sweat, and tears");
  next();
});

app.get('*', (req, res) => {
  res.send('hello world');
});

app.listen('3000', '0.0.0.0', err => {
  if(err) {
    console.error(err);
    process.exit(0);
  }

  console.info(`Running server at http://localhost:3000`);
});