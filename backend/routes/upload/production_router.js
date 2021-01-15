const express = require('express');
const path = require('path');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { ImageMimeTypes } = require('../../constants/ImageMimeTypes');
const { protectAPI } = require('../../services/protection/protection');

/************************** Routes to handle file upload ************************* */

const dotenvfile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
require('dotenv').config({ path: dotenvfile });
const router = express.Router();

const ACCESS_ID = process.env.AWS_ACCESS_KEY_ID;
const SECRET_ACCESS = process.env.AWS_SECRET_ACCESS_KEY;
const BUCKET = process.env.AWS_S3_BUCKET_NAME;

const s3 = new AWS.S3({
  accessKeyId: ACCESS_ID,
  secretAccessKey: SECRET_ACCESS,
});

const storage = multerS3({
  s3: s3,
  bucket: BUCKET,
  metadata: function (_req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (_req, file, cb) {
    cb(
      null,
      ''.concat(uuidv4(), Date.now().toString(), path.extname(file.originalname)),
    );
  },
  contentType: multerS3.AUTO_CONTENT_TYPE,
});

const upload = multer({
  storage: storage,
  fileFilter: (_req, file, cb) => {
    cb(null, ImageMimeTypes.includes(file.mimetype));
  },
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 1,
  },
});

router.route('/single').post(upload.single('image'), (req, res) => {
  const { apiKey } = req.body;
  if (!apiKey || !protectAPI(apiKey, true)) {
    res.status(403).send({ error: 'API Key not valid.' }).end();
  } else {
    if (!req.file) {
      res.status(400).send({
        error: "No file has been selected or file doesn't have proper extension",
      });
    } else {
      res.status(201).send({ url: req.file.location, fileName: req.file.originalname });
    }
  }
});

module.exports = { router };
