const router = require('express').Router();

const NotFoundError = require('../errors/NotFoundError');
const auth = require('../middlewares/auth');

router.use('/signin', require('./signin'));

router.use('/signup', require('./signup'));

router.use(auth);
router.use('/movies', require('./movies'));
router.use('/users', require('./users'));

router.use('*', (req, res, next) => {
  next(new NotFoundError('страница не найдена'));
});
module.exports = router;
