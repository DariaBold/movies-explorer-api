const { celebrate, Joi, Segments } = require('celebrate');

const { patternUrl, patternRU, patternEN } = require('../utils/constants');

const validateMovieCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    country: Joi.string().required().messages({ 'string.required': 'введите страну создания фильма' }),
    director: Joi.string().required().messages({ 'string.required': 'введите режиссёра фильма' }),
    duration: Joi.number().required().messages({ 'string.required': 'введите длительность фильма в минутах' }),
    year: Joi.number().required().messages({ 'string.required': 'введите год выпуска фильма' }),
    description: Joi.string().required().messages({ 'string.required': 'введите описание' }),
    image: Joi.string().pattern(patternUrl).required().messages({
      'string.required': 'введите ссылку на изображение',
      'string.pattern': 'введите корректную ссылку на изображение',
    }),
    trailerLink: Joi.string().pattern(patternUrl).required().messages({
      'string.required': 'введите ссылку на трейлер',
      'string.pattern': 'введите корректную ссылку на трейлер',
    }),
    thumbnail: Joi.string().pattern(patternUrl).required().messages({
      'string.required': 'введите ссылку на миниатюрное изображение',
      'string.pattern': 'введите корректную ссылку на миниатюрное изображение',
    }),
    movieId: Joi.number().required().messages({ 'string.required': 'заполните поле id фильма' }),
    nameRU: Joi.string().pattern(patternRU).required().messages({
      'string.required': 'введите название на русском',
      'string.pattern': 'введите корректное название на русском',
    }),
    nameEN: Joi.string().pattern(patternEN).required().messages({
      'string.required': 'введите название на английском',
      'string.pattern': 'введите корректное название на английском',
    }),
  }),
});

const validateMovieDelete = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().length(24).hex(),
  }),
});

const validateSignin = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateSignup = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }).unknown(true),
});

const validateUserUpdate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
});

module.exports = {
  validateMovieCreate, validateMovieDelete, validateSignin, validateSignup, validateUserUpdate,
};
