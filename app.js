require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const { errors } = require('celebrate');

const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./errors/NotFoundError');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_URL, {

});
app.use(requestLogger);

app.use('/', require('./routes/index'));

app.use('*', (req, res, next) => {
  next(new NotFoundError('страница не найдена'));
});
app.use(errorLogger);
app.use(errors());
app.use((err, req, res, next) => {
  const { code = 500, message } = err;
  res.status(code).send({
    message: code === 500
      ? 'На сервере произошла ошибка' : message,
  });
  next();
});

app.listen(PORT);
