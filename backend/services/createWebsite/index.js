const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const { createFiles } = require('./createFile');
const { logger } = require('../../logger/logger');
const { sendMailQueue } = require('../background/emailBackground');
const { uploadZip } = require('../zip/upload');
const { EMAIL_QUEUE_TYPES } = require('../../constants/REDIS_Service');
const { assetDownloader } = require('./assetDownloader');
const { zipDirectory } = require('./zipDirectory');
const { addBuilt } = require('../../models/queries');

const PUBLIC_DIRECTORY = path.join(__dirname, '../../user/public/images/');

const developSite = async (
  { introduction, aboutMe, workExperience, project, achievement, contact },
  email,
) => {
  createFiles({ introduction, aboutMe, workExperience, project, achievement, contact });
  exec('npm run build:user', async (err, _stdout, stderr) => {
    if (err) {
      logger.error(stderr);
      const options = {
        attempts: 2,
      };
      const data = {
        email,
        type: EMAIL_QUEUE_TYPES.FAILURE_EMAIL,
      };
      sendMailQueue.add(data, options);
      return;
    } else {
      fs.mkdir(PUBLIC_DIRECTORY, { recursive: true }, async (err) => {
        if (err) {
          logger.error(err);
          return;
        }
        assetDownloader(
          { introduction, aboutMe, workExperience, project, achievement, contact },
          () => {
            zipDirectory(async () => {
              const url = await uploadZip(path.join(__dirname, '../../website.zip'));
              const options = {
                attempts: 2,
              };
              const data = {
                email,
                url,
                type: EMAIL_QUEUE_TYPES.SUCCESS_EMAIL,
              };
              sendMailQueue.add(data, options);
              addBuilt()
                .then(() => {})
                .catch(() => {});
            });
          },
        );
      });
    }
  });
};

module.exports = { developSite };
