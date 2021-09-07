const dbHost = process.env.NODE_ENV === 'production' ?
  process.env.DATABASE_HOST : '127.0.0.1'
const dbName = process.env.NODE_ENV === 'production' ?
  process.env.DATABASE_NAME : 'strapi-mongo'
const dbUsername = process.env.NODE_ENV === 'production' ?
  process.env.DATABASE_USERNAME : null
const dbPassword = process.env.NODE_ENV === 'production' ?
  process.env.DATABASE_PASSWORD : null

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: dbHost,
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: dbName,
        username: dbUsername,
        password: dbPassword,
      },
      options: {
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
