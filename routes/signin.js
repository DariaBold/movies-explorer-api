const router = require('express').Router();
const { celebrate, Joi, Segments } = require('celebrate');

const { login } = require('../controllers/users');

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

module.exports = router;
