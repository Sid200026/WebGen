const express = require('express');
const path = require('path');
const { router: frontendRouter } = require('./routes/frontend/router');
const app = express();

/************************** Serving Static Files ************************* */

app.use('/public', express.static(path.join(__dirname, 'public')));

/************************** Routing ************************* */

/********* Serving HTML file *********/

app.use('*', frontendRouter);

module.exports = {
  app,
};
