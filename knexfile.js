module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/cobb'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }

};
