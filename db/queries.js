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
  const result = await pool.query('SELECT * FROM usernames WHERE username LIKE $1', [`%${query}%`]);
  const rows = result.rows;
  console.log('rows:', rows);
  return rows;
  console.log('result:', result);
  return result;
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
