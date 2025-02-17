const { Pool } = require('pg');

module.exports = new Pool({
  host: '127.0.0.1',
  user: 'julianso',
  database: 'top_users',
  password: '1234',
  port: 5432,
});
