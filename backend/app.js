const express = require('express');
const path = require('path');
const helmet = require('helmet');
const multer = require('multer');
const bodyParser = require('body-parser');
const compression = require('compression');
const { router: frontendRouter } = require('./routes/frontend/router');
const { router: uploadRouter } = require('./routes/upload/router');
const { router: logRouter } = require('./routes/logging/router');
const { router: submitRouter } = require('./routes/submit/router');
const { logger } = require('./logger/logger');
const { protectAPI } = require('./services/protection/protection');
const app = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

/************************** Serving Static Files ************************* */

app.use('/public', express.static(path.join(__dirname, 'public')));

/* 
  In developmen, upload folder should be treated as static directory
  so that frontend can access the images
*/

if (process.env.NODE_ENV !== 'production') {
  app.use('/upload', express.static(path.join(__dirname, 'upload')));
}

/************************** Routing ************************* */

app.use('/api', (req, res, next) => {
  const { apiKey } = req.body;
  if (!apiKey) {
    res.json({ error: 'Task failed successfully' }).status(403).end();
  } else {
    if (protectAPI(apiKey)) {
      next();
    } else {
      res.json({ error: 'Task failed successfully' }).status(403).end();
    }
  }
});

app.use('/upload', uploadRouter);
app.use('/log', logRouter);
app.use('/submit', submitRouter);

/********* Serving HTML file *********/

app.use('*', frontendRouter);

app.use(function (err, _req, res, _next) {
  logger.error(err.stack);
  if (err instanceof multer.MulterError) {
    res.status(400).send({ error: err.message });
  } else {
    res.status(500).send({ error: 'Oops: Something broke!' });
  }
});

module.exports = {
  app,
};
