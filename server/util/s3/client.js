const Minio = require('minio');
require('dotenv').config();

const registryBucket = process.env.OPEN_BALENA_S3_REGISTRY_BUCKET || 'registry-data';

module.exports = new Minio.Client({
  endPoint: process.env.OPEN_BALENA_S3_URL.split('://')[1],
  useSSL: !!process.env.OPEN_BALENA_S3_URL.includes('https'),
  accessKey: process.env.OPEN_BALENA_S3_ACCESS_KEY,
  secretKey: process.env.OPEN_BALENA_S3_SECRET_KEY,
});