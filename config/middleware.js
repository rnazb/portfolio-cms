module.exports = {
  //...
  load: {
    before: ['cors', 'gzip']
  },
  settings: {
    cors: {
      enable: true,
      origin: ['*'],
    },
    gzip: {
      enabled: true,
      options: {
        br: false
      }
    }
  },
}