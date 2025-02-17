const db = require('../db/queries');

usersListGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log('Usernames: ', usernames);
  res.render('index', {
    title: 'User list',
    users: usernames,
  });
};

usersCreateGet = async (req, res) => {
  res.render('createUser', {
    title: 'Create user',
  });
};

usersCreatePost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  console.log('username to be saved: ', req.body.username);
  res.redirect('/');
};

usersDeleteAllGet = async (req, res) => {
  await db.deleteUsernamesAll();
  res.redirect('/');
};

// usersDeleteAllPost = async (req, res) => {
//   await db.deleteUsernamesAll();
//   res.redirect('/');
// };

module.exports = {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
  usersDeleteAllGet,
  // usersDeleteAllPost,
};
