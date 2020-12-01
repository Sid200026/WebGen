const { zipFile } = require('../zip/zip');

const zipDirectory = (callback) => {
  zipFile(callback);
};

module.exports = { zipDirectory };
