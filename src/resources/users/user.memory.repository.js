const User = require('./user.model');
const db = require('../../utils/inMemoryDB');

const getAll = async () => {
  return db.Users;
};

const create = async data => {
  const user = await new User(data);
  db.Users.push(user);
  return user;
};

const getUserById = async id => {
  return await db.Users.find(user => user.id === id);
};

const updateUserById = async (id, data) => {
  const user = await getUserById(id);
  user.name = data.name;
  user.login = data.login;
  user.password = data.password;
  return user;
};

const deleteUserById = async id => {
  const index = db.Users.findIndex(user => user.id === id);
  db.Users.splice(index, 1);
  db.Tasks = db.Tasks.map(task => {
    if (task.userId === id) {
      task.userId = null;
    }
    return task;
  });

  return 'success';
};
module.exports = {
  getAll,
  create,
  getUserById,
  updateUserById,
  deleteUserById
};
