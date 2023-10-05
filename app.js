require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const helmet = require('helmet');

const bodyParser = require('body-parser');

const { errors } = require('celebrate');
const cors = require('cors');
const { DB_URL } = require('./config');

const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');
const errorHandler = require('./middlewares/errorHandler');

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_URL, {

});
app.use(requestLogger);
app.use(limiter);
app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
