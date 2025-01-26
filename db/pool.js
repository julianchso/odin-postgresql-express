const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost',
  user: 'julianso',
  database: 'top_users',
  password: 'nissanr34',
  port: 5432,
});
