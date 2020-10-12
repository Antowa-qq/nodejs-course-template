const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const create = data => boardsRepo.create(data);
const getBoardById = id => boardsRepo.getBoardById(id);
const updateBoardById = (id, data) => boardsRepo.updateBoardById(id, data);
const deleteBoardById = id => boardsRepo.deleteBoardById(id);

module.exports = {
  getAll,
  create,
  getBoardById,
  updateBoardById,
  deleteBoardById
};
