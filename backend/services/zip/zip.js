const fs = require('fs');
const archiver = require('archiver');
const { logger } = require('../../logger/logger');

const zipFile = (directoryPath, finalPath) => {
  const output = fs.createWriteStream(directoryPath);
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  });

  archive.on('error', function (err) {
    logger.error(err);
  });

  archive.pipe(output);

  archive.directory(finalPath, false);

  archive.finalize();
};
