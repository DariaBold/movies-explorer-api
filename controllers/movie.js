const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');
const NotFoundError = require('../errors/NotFoundError');
const Movie = require('../models/movie');

module.exports.createMovies = (req, res, next) => {
  const {
    country, director, duration, year, description, image,
    trailerLink, thumbnail, movieId, nameRU, nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Невалидные данные'));
      } else {
        next(err);
      }
    });
};
module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movie) => res.send(movie))
    .catch((err) => next(err));
};
module.exports.deleteMovieId = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie.owner.equals(req.user._id)) {
        next(new ForbiddenError('Это фильм другого участника.'));
      }
      Movie.deleteOne(movie)
        .orFail()
        .then(() => { res.send({ message: 'Этот фильм удален.' }); })
        .catch((err) => {
          if (err.name === 'ValidationError') {
            next(new BadRequestError('Некорректный _id карточки.'));
          } else {
            next(err);
          }
        });
    })
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        next(new NotFoundError('фильм по указанному _id не найден.'));
      } else {
        next(err);
      }
    });
};
