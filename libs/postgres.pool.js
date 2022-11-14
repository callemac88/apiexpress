const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 50276,
  user: 'nico',
  password: 'admin123',
  database: 'my_store'
});


module.exports = pool;

