const fs = require('fs');
const path = require('path');

// Folders to delete : user/build and user/public
// Files to delete : public.zip and user.*.js file ( only in production )

const BUILD_DIRECTORY = path.join(__dirname, '../../user/build');
const PUBLIC_IMAGE_DIRECTORY = path.join(__dirname, '../../user/public/images');
const ZIP_FILE = path.join(__dirname, '../../website.zip');
const USER_INTRODUCTION_FILE = path.join(
  __dirname,
  '../../../frontend/initialState/user.introduction_initial.js',
);
const USER_ABOUT_ME_FILE = path.join(
  __dirname,
  '../../../frontend/initialState/user.about_me_initial.js',
);

const cleanUp = () => {
  fs.rmdirSync(BUILD_DIRECTORY, { recursive: true });
  fs.rmdirSync(PUBLIC_IMAGE_DIRECTORY, { recursive: true });
  fs.unlinkSync(ZIP_FILE);
  if (process.env.NODE_ENV === 'production') {
    // Deleting this file will cause issues in development since it is a required import
    fs.unlinkSync(USER_INTRODUCTION_FILE);
    fs.unlinkSync(USER_ABOUT_ME_FILE);
  }
};

module.exports = { cleanUp };
