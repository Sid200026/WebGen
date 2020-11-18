const path = require('path');
const { DOWNLOADABLE_CONTENT } = require('../../constants/DownloadableContent');
const { downloadFile } = require('../download/download');

const rootDirectory = path.join(__dirname, '../../user/public/images/');

const assetDownloader = async ({ introduction }) => {
  const INTRODUCTION_DOWNLOADABLE_CONTENT = DOWNLOADABLE_CONTENT.introduction;
  INTRODUCTION_DOWNLOADABLE_CONTENT.forEach(async (ele) => {
    let { url, name } = introduction[`${ele}`];
    if (process.env.NODE_ENV !== 'production') {
      const host = 'localhost';
      const port = process.env.PORT || 8000;
      const hostname = `http://${host}:${port}`;
      url = hostname + url;
    }
    const fileName = path.join(rootDirectory, name);
    await downloadFile(url, fileName);
  });
};

module.exports = { assetDownloader };
