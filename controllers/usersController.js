import {
  getAllUsernames,
  insertUsername,
  searchUsername,
  deleteUsernamesAll,
} from '../db/queries.js';

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

const usersSearchGet = async (req, res) => {
  const { q } = req.query;
  console.log(`query: ${q}`);
  const searchedUsernames = await searchUsername(q);
  console.log(`searchedUsernames: ${searchedUsernames}`);
  res.render('search', {
    title: 'Username Search',
    searchedUsernames,
  });
};

const usersDeleteAllGet = async (req, res) => {
  await deleteUsernamesAll();
  res.redirect('/');
};

export default {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
  usersSearchGet,
  usersDeleteAllGet,
};
