let router = null;
if (process.env.NODE_ENV === 'production') {
  const { router: prodRouter } = require('./production_router');
  router = prodRouter;
} else {
  const { router: devRouter } = require('./development_router');
  router = devRouter;
}

module.exports = { router };
