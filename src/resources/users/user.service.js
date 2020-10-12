const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const create = data => usersRepo.create(data);
const getUserById = id => usersRepo.getUserById(id);
const updateUserById = (id, data) => usersRepo.updateUserById(id, data);
const deleteUserById = id => usersRepo.deleteUserById(id);

module.exports = {
  getAll,
  create,
  getUserById,
  updateUserById,
  deleteUserById
};
