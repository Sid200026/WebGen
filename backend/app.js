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
const { router: templateRouter } = require('./routes/template/router');
const { logger } = require('./logger/logger');
const { protectAPI } = require('./services/protection/protection');
const { instantLimiter, overallLimiter } = require('./controller/rateLimitUpload');
const app = express();

const { sanitiseInput } = require('./utils/sanitise');

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'script-src': ["'self'", "'unsafe-eval'"],
      'img-src': ["'self'", 'https:', 'data:'],
    },
  }),
);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('*', (req, _res, next) => {
  req.body = sanitiseInput(req.body);
  next();
});

/************************** Serving Static Files ************************* */

app.use('/public', express.static(path.join(__dirname, 'public')));

/* 
  In development, upload folder should be treated as static directory
  so that frontend can access the images
*/

if (process.env.NODE_ENV !== 'production') {
  app.use('/upload', express.static(path.join(__dirname, 'upload')));
}

/************************** Routing ************************* */

app.use('/api', (req, res, next) => {
  const { apiKey } = req.body;
  if (!apiKey) {
    res.status(403).json({ error: 'API Key not present.' }).end();
  } else {
    if (protectAPI(apiKey)) {
      next();
    } else {
      res.status(403).json({ error: 'API Key not valid.' }).end();
    }
  }
});

app.use('/upload', [instantLimiter, overallLimiter]);
app.use('/upload', uploadRouter);

app.use('/template', templateRouter);
app.use('/api/log', logRouter);

app.use('/api/submit', submitRouter);

/********* Serving HTML file *********/

app.use('*', frontendRouter);

app.use(function (err, _req, res, _next) {
  logger.error(err.stack);
  if (err instanceof multer.MulterError) {
    res.status(413).send({ error: err.message });
  } else {
    res.status(500).send({ error: 'Oops: Something broke!' });
  }
});

module.exports = {
  app,
};
