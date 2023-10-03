const router = require('express').Router();
const { celebrate, Joi, Segments } = require('celebrate');

const { getUserNow, patchUser } = require('../controllers/users');

router.get('/me', getUserNow);

router.patch('/me', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().min(2).email(),
  }),
}), patchUser);

module.exports = router;
