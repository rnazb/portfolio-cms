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
    // gzip: {
    //   enabled: true,
    //   options: {
    //     br: false
    //   }
    // }
  },
}