const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

/************************** Routes to handle file upload ************************* */

const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: dotenvfile });

const ACCESS_ID = process.env.AWS_ACCESS_KEY_ID;
const SECRET_ACCESS = process.env.AWS_SECRET_ACCESS_KEY;
const BUCKET = process.env.AWS_S3_BUCKET_NAME;

const s3 = new AWS.S3({
  accessKeyId: ACCESS_ID,
  secretAccessKey: SECRET_ACCESS,
});

const PUBLIC_DIRECTORY = path.join(__dirname, '../../public');

// Copy the file to upload
const uploadDevelopment = (pathTarget) => {
  const filename = ''.concat(uuidv4(), 'website.zip');
  fs.createReadStream(pathTarget).pipe(
    fs.createWriteStream(path.join(PUBLIC_DIRECTORY, filename)),
  );
  return 'http://localhost:8000/public/'.concat(filename);
};

const uploadProduction = async (pathTarget) => {
  const fileContent = fs.createReadStream(pathTarget);

  const params = {
    Bucket: BUCKET,
    Key: ''.concat(uuidv4(), 'website.zip'),
    Body: fileContent,
  };

  const response = await s3.upload(params).promise();
  return response.Location;
};

const uploadZip = async (pathTarget) => {
  if (process.env.NODE_ENV === 'production') {
    const url = await uploadProduction(pathTarget);
    return url;
  } else {
    return uploadDevelopment(pathTarget);
  }
};

module.exports = { uploadZip };
