const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  res.json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUserById(req.params.id);
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUserById(req.params.id, req.body);
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const data = await usersService.deleteUserById(req.params.id);
  res.json(data);
});

module.exports = router;
