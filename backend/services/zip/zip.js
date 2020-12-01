const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const { logger } = require('../../logger/logger');

const USER_DIRECTORY = path.join(__dirname, '../../user/');
const FINAL_DIRECTORY = path.join(__dirname, '../../website.zip');

const zipFile = (
  cb = null,
  directoryPath = FINAL_DIRECTORY,
  finalPath = USER_DIRECTORY,
) => {
  const output = fs.createWriteStream(directoryPath);
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  });

  archive.on('error', (err) => {
    logger.error(err);
  });

  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      logger.error(err);
    } else {
      logger.error(err);
      throw err;
    }
  });

  archive.pipe(output);

  archive.directory(finalPath, false);

  archive.finalize().then(() => {
    if (cb !== null) {
      cb();
    }
  });
};

module.exports = { zipFile };
