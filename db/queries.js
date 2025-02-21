import pool from './pool.js';
import popup from 'node-popup';
import { confirm } from 'node-popup';

async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}

async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

async function searchUsername(query) {
  await pool.query('SELECT * FROM usernames WHERE username LIKE %$1%', [query]);
}

async function deleteUsernamesAll() {
  const main = async () => {
    try {
      await pool.query('DELETE FROM usernames');
      return 'All usernames deleted';
    } catch (error) {
      console.log(error);
      console.log('Usernames not deleted');
      return;
    }
  };
  main();
}

export { getAllUsernames, insertUsername, searchUsername, deleteUsernamesAll };
