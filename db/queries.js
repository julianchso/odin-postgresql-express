const pool = require('./pool');

async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}

async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

async function deleteUsernamesAll() {
  await pool.query('DELETE FROM usernames');
  return 'All usernames deleted';
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteUsernamesAll,
};
