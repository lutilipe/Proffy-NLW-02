require('dotenv').config()

import path from 'path'

module.exports = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: path.resolve(
      __dirname,
      'src',
      'database',
      'migrations'
    ),
  },
  useNullAsDefault: true,
}
