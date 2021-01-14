const path = require('path');
const { DOWNLOADABLE_CONTENT } = require('../../constants/DownloadableContent');
const { downloadFile } = require('../download/download');
const { logger } = require('../../logger/logger');

const rootDirectory = path.join(__dirname, '../../user/public/images/');

const assetDownloader = (
  { introduction, aboutMe, workExperience, project },
  cb = null,
) => {
  const promises = [];
  const INTRODUCTION_DOWNLOADABLE_CONTENT = DOWNLOADABLE_CONTENT.introduction;
  const ABOUT_ME_DOWNLOADABLE_CONTENT = DOWNLOADABLE_CONTENT.aboutMe;
  const WORK_EXPERIENCE_DOWNLOADABLE_CONTENT = DOWNLOADABLE_CONTENT.workExperience;
  const PROJECT_DOWNLOADABLE_CONTENT = DOWNLOADABLE_CONTENT.project;

  const downloadContent = (url, name) => {
    if (!url || !name || url.length === 0 || name.length === 0) {
      return;
    }
    if (process.env.NODE_ENV !== 'production' && url[0] === '/') {
      const host = 'localhost';
      const port = process.env.PORT || 8000;
      const hostname = `http://${host}:${port}`;
      url = hostname + url;
    }
    const fileName = path.join(rootDirectory, name);
    promises.push(downloadFile(url, fileName));
  };

  INTRODUCTION_DOWNLOADABLE_CONTENT.forEach((ele) => {
    let { url, name } = introduction[`${ele}`];
    downloadContent(url, name);
  });

  ABOUT_ME_DOWNLOADABLE_CONTENT.forEach((ele) => {
    let { url, name } = aboutMe[`${ele}`];
    downloadContent(url, name);
  });

  WORK_EXPERIENCE_DOWNLOADABLE_CONTENT.forEach((ele) => {
    let { url, name } = workExperience[`${ele}`];
    downloadContent(url, name);
  });

  PROJECT_DOWNLOADABLE_CONTENT.forEach((ele) => {
    const popularProjects = project[ele.key];
    popularProjects.forEach((popularProject) => {
      const imageDetails = popularProject[ele.child];
      let url = imageDetails[ele.url];
      const name = imageDetails[ele.filename];
      downloadContent(url, name);
    });
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
