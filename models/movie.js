const mongoose = require('mongoose');

const { patternUrl } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'заполните поле'],
    message: ['введите страну создания фильма'],
  },
  director: {
    type: String,
    required: [true, 'заполните поле'],
    message: ['введите режиссёра фильма'],
  },
  duration: {
    type: Number,
    required: [true, 'заполните поле'],
    message: ['введите длительность фильма'],
  },
  year: {
    type: Number,
    required: true,
    message: ['введите год выпуска фильма'],
  },
  description: {
    type: String,
    required: [true, 'заполните поле'],
    message: ['введите описание'],
  },
  image: {
    type: String,
    required: [true, 'заполните поле'],
    validate: {
      validator(v) {
        return /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(v);
      },
    },
    message: ['введите корректную ссылку на изображение'],
  },
  trailerLink: {
    type: String,
    required: [true, 'заполните поле'],
    validate: {
      validator(v) {
        return patternUrl.test(v);
      },
    },
    message: ['введите корректную ссылку на трейлер'],
  },
  thumbnail: {
    type: String,
    required: [true, 'заполните поле'],
    validate: {
      validator(v) {
        return patternUrl.test(v);
      },
    },
    message: ['введите корректную ссылку на миниатюрное изображение'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'заполните поле '],
    message: ['заполните поле id фильма'],
  },
  nameRU: {
    type: String,
    required: [true, 'заполните поле'],
    validate: {
      validator(v) {
        return /^[а-яё0-9]+$/iu.test(v);
      },
    },
    message: ['введите название на русском'],
  },
  nameEN: {
    type: String,
    required: [true, 'заполните поле'],
    validate: {
      validator(v) {
        return /^[a-zA-Z\d\s!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]+$/.test(v);
      },
    },
    message: ['введите название на английском'],
  },
}, { versionKey: false });
module.exports = mongoose.model('movie', movieSchema);
