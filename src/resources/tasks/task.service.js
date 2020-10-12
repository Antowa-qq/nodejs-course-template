const taskRepo = require('./task.memory.repository');
const getAll = () => taskRepo.getAll();
const getTaskByBoardId = id => taskRepo.getTaskByBoardId(id);
const create = (boardId, data) => taskRepo.create(boardId, data);
const getTaskById = id => taskRepo.getTaskById(id);
const updateTaskById = (id, data) => taskRepo.updateTaskById(id, data);
const deleteTaskById = id => taskRepo.deleteTaskById(id);

module.exports = {
  getTaskByBoardId,
  getAll,
  create,
  getTaskById,
  updateTaskById,
  deleteTaskById
};
