## My Battery App

This is a sample Single Page Application (SPA) that displays your current battery level using NodeJS server side render, Preact, babel and Webpack. The app is written in the latest version of ECMAscript (ES6/ESnext).

If you've never used this stack before, this is app is designed to get you to grips with all of it as quick as possible. There's a lot going on here but once you know how to do this, you can move into building any level SPA that takes your fancy. Don't be worried if it looks all a bit too much, look over the example and ask questions. It's a lot simpler than it seems at first.

**NOTE** This example was built using Preact but can easily be switched to React by removal of aliasing in webpack and babel, also changing how the app is rendered in `application.js`.

## How to build

The below guide is a rough set of instructions to build the application, you should refer to documentation and the example project to learn what you need to do to accomplish each step.


### Setting up the project

##### Installing dependencies

Ensure you have NodeJS installed, this can be done using their site [nodejs.org](https://nodejs.org/en/).

You can then install your dependencies using npm:
`npm install <module>`

You can see the list of modules you will need inside the package.json file.


##### Creating project structure
Create the following empty files
 - server.js
 - .babelrc
 - webpack.config.dev.js
 - webpack.config.prod.js
 - client/application.js
 - client/styles/app.scss
 - client/components/App.js

These files will make up the base of your project.

### Creating the server and index.html

In your server.js file, set up an [ExpressJS](https://expressjs.com) server with one endpoint; a get request to `*`. That endpoint will load your app for any URL.

Your controller/middleware for that endpoint will need to send a string that appears to be a HTML file. This HMTL string will need to contain your app, using `renderToString()` you can get the result of your app and display it as static HTML. This div in which you contain your app must be the same div you use in the render method in `application.js`

### Setting up webpack

When using [Webpack](https://webpack.js.org/) you'll most likely want a different setup for production and development. For development you might want hot reloading but for production you'll want your code minified and uglified.

This example project has this split and you can see in the server.js file a branch based on the `NODE_ENV` property on the computer. This is so that we can give the application the generated bundle for each environment.

To set up webpack, you can use the examples in this project or the Webpack website. It is very well documented and displays multiple options, more than what we'll need for a simple project like this.

**NOTE** If you'd like to use Preact instead of React, you'll want to alias React with Preact in webpack as well as in babel.

### Creating the application

To get Hot Module Reloading (HMR) to work with Preact, you need to assign the rendered application to a variable. If you wish to use React then I'd suggest using [this guide](https://webpack.js.org/guides/hmr-react/). Setting up the application itself is done in `client/application.js`. All that's required in here is to import your styling (so webpack can pick it up and generate the CSS from the Sass). Then to render the application using the `render` method.

Next we can move onto the `client/components/App.js`. This file contains the base of your Preact/React application, the result of this components render method will be what's displayed at your root div (specified by the render method). In here we can create the data we need and we can create the markup we'll need to display it. We can also create other components to import into here and display.