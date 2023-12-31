const router = require('express').Router();

const { createUser } = require('../controllers/users');
const { validateSignup } = require('../middlewares/validations');

router.post('/', validateSignup, createUser);

module.exports = router;
