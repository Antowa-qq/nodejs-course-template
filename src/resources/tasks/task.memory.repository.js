const db = require('../../utils/inMemoryDB');
const Task = require('./task.model');

const getAll = async () => {
  return db.Tasks;
};

const getTaskByBoardId = async id => {
  return await db.Tasks.find(task => task.boardId === id);
};

const create = (boardId, data) => {
  const task = new Task({ ...data, boardId });
  db.Tasks.push(task);
  return task;
};

const getTaskById = id => {
  return db.Tasks.find(task => task.id === id);
};

const updateTaskById = (id, data) => {
  const task = getTaskById(id);
  task.title = data.title;
  task.order = data.order;
  task.description = data.description;
  task.userId = data.userId;
  task.boardId = data.boardId;
  task.columnId = data.columnId;
  return task;
};

const deleteTaskById = id => {
  const index = db.Tasks.findIndex(task => task.id === id);
  db.Tasks.splice(index, 1);
  return 'success';
};

module.exports = {
  getTaskByBoardId,
  getAll,
  create,
  getTaskById,
  updateTaskById,
  deleteTaskById
};
