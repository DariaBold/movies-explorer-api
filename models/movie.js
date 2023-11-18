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
        return patternUrl.test(v);
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
    message: ['введите название на русском'],
  },
  nameEN: {
    type: String,
    required: [true, 'заполните поле'],
    validate: {
      validator(v) {
        return /^[a-zA-Z\d\s!"#$%&'()*+,-.–:;<=>?@[\]^_`{|}~/]+$/.test(v);
      },
    },
    message: ['введите название на английском'],
  },
}, { versionKey: false });
module.exports = mongoose.model('movie', movieSchema);
