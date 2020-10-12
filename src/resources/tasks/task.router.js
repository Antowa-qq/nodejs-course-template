const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await taskService.getAll();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const task = await taskService.create(req.params.boardId, req.body);
  res.json(Task.toResponse(task));
});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  const task = await taskService.getTaskById(req.params.id);
  if (!task) res.status('404');
  res.json(task);
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  const task = await taskService.updateTaskById(req.params.id, req.body);
  res.json(Task.toResponse(task));
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  const data = await taskService.deleteTaskById(req.params.id);
  res.json(data);
});

module.exports = router;
