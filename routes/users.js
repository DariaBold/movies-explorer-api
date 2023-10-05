const router = require('express').Router();

const { getUserNow, patchUser } = require('../controllers/users');
const { validateUserUpdate } = require('../middlewares/validations');

router.get('/me', getUserNow);

router.patch('/me', validateUserUpdate, patchUser);

module.exports = router;
