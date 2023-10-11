require('dotenv').config();

const {
  SECRET_KEY,
  DB_URL,
  NODE_ENV,
} = process.env;
module.exports = {
  SECRET_KEY: NODE_ENV === 'production' ? SECRET_KEY : 'some-secret-key',
  DB_URL: NODE_ENV === 'production' ? DB_URL : 'mongodb://127.0.0.1:27017/bitfilmsdb',
};
