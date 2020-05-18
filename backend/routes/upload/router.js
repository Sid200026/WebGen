const { router: devRouter } = require('./development_router');
const { router: prodRouter } = require('./production_router');

let router = null;
if (process.env.NODE_ENV === 'production') {
  router = prodRouter;
} else {
  router = devRouter;
}

module.exports = { router };
