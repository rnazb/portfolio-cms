// const dbHost = process.env.NODE_ENV === 'production' ?
//   process.env.DATABASE_HOST : '127.0.0.1'
// const dbName = process.env.NODE_ENV === 'production' ?
//   process.env.DATABASE_NAME : 'strapi-mongo'
// const dbUsername = process.env.NODE_ENV === 'production' ?
//   process.env.DATABASE_USERNAME : null
// const dbPassword = process.env.NODE_ENV === 'production' ?
//   process.env.DATABASE_PASSWORD : null
// const dbSrv = process.env.NODE_ENV === 'production' ? true : false
const dbUri = process.env.NODE_ENV === 'production' ?
  process.env.DATABASE_URI : 'mongodb://localhost:27017/strapi-mongo'

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      // settings: {
      //   host: dbHost,
      //   srv: dbSrv,
      //   port: env.int('DATABASE_PORT', 27017),
      //   database: dbName,
      //   username: dbUsername,
      //   password: dbPassword,
      // },
      settings: {
        uri: dbUri
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
