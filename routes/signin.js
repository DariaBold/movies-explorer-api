const router = require('express').Router();

const { login } = require('../controllers/users');
const { validateSignin } = require('../middlewares/validations');

router.post('/', validateSignin, login);

module.exports = router;
