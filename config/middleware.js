module.exports = {
  //...
  load: {
    before: ['cors']
  },
  settings: {
    cors: {
      enable: true,
      origin: ['*'],
    },
  },
};