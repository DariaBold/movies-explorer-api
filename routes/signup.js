const router = require('express').Router();
const { celebrate, Joi, Segments } = require('celebrate');

const { createUser } = require('../controllers/users');

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }).unknown(true),
}), createUser);

module.exports = router;
