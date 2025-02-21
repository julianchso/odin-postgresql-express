import { getAllUsernames, insertUsername, deleteUsernamesAll } from '../db/queries.js';

const usersListGet = async (req, res) => {
  const usernames = await getAllUsernames();
  // console.log('Usernames: ', usernames);
  res.render('index', {
    title: 'User list',
    users: usernames,
  });
};

const usersCreateGet = async (req, res) => {
  res.render('createUser', {
    title: 'Create user',
  });
};

const usersCreatePost = async (req, res) => {
  const { username } = req.body;
  await insertUsername(username);
  // console.log('username to be saved: ', req.body.username);
  res.redirect('/');
};

const usersDeleteAllGet = async (req, res) => {
  await deleteUsernamesAll();
  res.redirect('/');
};

export default {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
  usersDeleteAllGet,
};
