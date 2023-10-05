const router = require('express').Router();

const auth = require('../middlewares/auth');

router.use('/signin', require('./signin'));

router.use('/signup', require('./signup'));

router.use(auth);
router.use('/movies', require('./movies'));
router.use('/users', require('./users'));

module.exports = router;
