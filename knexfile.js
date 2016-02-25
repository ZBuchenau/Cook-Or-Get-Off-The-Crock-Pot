require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEV_DB
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
