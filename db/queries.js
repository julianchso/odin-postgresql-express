const pool = require('./pool');

async function getAllUsernames() {
  console.log('getAllusernames');
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}

async function insertUsername(username) {
  console.log('insertUsername');
  await pool.query('INSERT INTO usernames (username VALUES ($1),'[username]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
};
