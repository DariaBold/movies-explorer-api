const router = require('express').Router();

const {
  getMovies, createMovies, deleteMovieId,
} = require('../controllers/movie');

const { validateMovieCreate, validateMovieDelete } = require('../middlewares/validations');

router.get('/', getMovies);
router.post('/', validateMovieCreate, createMovies);
router.delete('/:movieId', validateMovieDelete, deleteMovieId);

module.exports = router;
