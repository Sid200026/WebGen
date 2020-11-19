const path = require('path');
const { DOWNLOADABLE_CONTENT } = require('../../constants/DownloadableContent');
const { downloadFile } = require('../download/download');
const { logger } = require('../../logger/logger');

const rootDirectory = path.join(__dirname, '../../user/public/images/');

const assetDownloader = ({ introduction }, cb = null) => {
  const promises = [];
  const INTRODUCTION_DOWNLOADABLE_CONTENT = DOWNLOADABLE_CONTENT.introduction;
  INTRODUCTION_DOWNLOADABLE_CONTENT.forEach((ele) => {
    let { url, name } = introduction[`${ele}`];
    if (process.env.NODE_ENV !== 'production') {
      const host = 'localhost';
      const port = process.env.PORT || 8000;
      const hostname = `http://${host}:${port}`;
      url = hostname + url;
    }
    const fileName = path.join(rootDirectory, name);
    promises.push(downloadFile(url, fileName));
  });
  Promise.all(promises)
    .then(() => {
      if (cb !== null) cb();
    })
    .catch((err) => {
      logger.error(err);
      if (cb !== null) cb(); // Proceed without image download
    });
};

module.exports = { assetDownloader };
