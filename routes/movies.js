const router = require('express').Router();
const { celebrate, Joi, Segments } = require('celebrate');

const {
  getMovies, createMovies, deleteMovieId,
} = require('../controllers/movie');
const { patternUrl, patternRU, patternEN } = require('../utils/constants');

router.get('/', getMovies);
router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(patternUrl).required(),
    trailerLink: Joi.string().pattern(patternUrl).required(),
    thumbnail: Joi.string().pattern(patternUrl).required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().pattern(patternRU).required(),
    nameEN: Joi.string().pattern(patternEN).required(),
  }),
}), createMovies);
router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex().required(),
  }),
}), deleteMovieId);

module.exports = router;
