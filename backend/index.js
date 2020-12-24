const { app } = require('./app');
const { logger } = require('./logger/logger');
require('./models/index');
const { createTheme } = require('./scripts/createTheme');
createTheme();

// Use .env in development mode, .env.production in production mode
const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: dotenvfile });

// Read the port from the environment file
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => logger.info(`WebGen Server listening on Port ${PORT}`));
