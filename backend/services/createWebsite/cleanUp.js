const fs = require('fs');
const path = require('path');

// Folders to delete : user/build and user/public
// Files to delete : public.zip and user.*.js file ( only in production )

const BUILD_DIRECTORY = path.join(__dirname, '../../user/build');
const PUBLIC_DIRECTORY = path.join(__dirname, '../../user/public');
const ZIP_FILE = path.join(__dirname, '../../website.zip');
const USER_INTRODUCTION_FILE = path.join(
  __dirname,
  '../../../frontend/src/initialState/user.introduction.js',
);

const cleanUp = () => {
  fs.rmdirSync(BUILD_DIRECTORY, { recursive: true });
  fs.rmdirSync(PUBLIC_DIRECTORY, { recursive: true });
  fs.unlinkSync(ZIP_FILE);
  if (process.env.NODE_ENV === 'production') {
    // Deleting this file will cause issues in development since it is a required import
    fs.unlinkSync(USER_INTRODUCTION_FILE);
  }
};

module.exports = { cleanUp };
