const path = require('path');
const winston = require('winston');

const { format } = winston;

const logFormat = format.combine(
  format.colorize(),
  format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  format.align(),
  format.printf((info) => `${info.timestamp} : ${info.message}`),
);

const backend_base_dir = path.join(__dirname, '../', 'logs', 'backend');
const frontend_base_dir = path.join(__dirname, '../', 'logs', 'frontend');

const logger = winston.createLogger({
  format: logFormat,
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({
      filename: path.join(backend_base_dir, 'error.log'),
      level: 'error',
    }),
    new winston.transports.File({
      filename: path.join(backend_base_dir, 'info.log'),
      level: 'info',
    }),
  ],
});

const frontendLogger = winston.createLogger({
  format: logFormat,
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({
      filename: path.join(frontend_base_dir, 'error.log'),
      level: 'error',
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
  frontendLogger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

module.exports = { logger, frontendLogger };
