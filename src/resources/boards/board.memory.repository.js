const Board = require('./board.model');
const db = require('../../utils/inMemoryDB');

const getAll = async () => {
  return db.Boards;
};

const create = async data => {
  const board = await new Board(data);
  db.Boards.push(board);
  return board;
};

const getBoardById = async id => {
  return await db.Boards.find(board => board.id.toString() === id.toString());
};

const updateBoardById = async (id, data) => {
  const board = await getBoardById(id);
  board.title = data.title;
  board.columns = data.columns;
  return board;
};

const deleteBoardById = async id => {
  const index = db.Boards.findIndex(board => board.id === id);
  db.Boards.splice(index, 1);
  db.Tasks = db.Tasks.filter(task => task.boardId !== id);
  return 'success';
};
module.exports = {
  getAll,
  create,
  getBoardById,
  updateBoardById,
  deleteBoardById
};
