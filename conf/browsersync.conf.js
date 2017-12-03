const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ]
    },
    open: false,
    notify: false,
    port: process.env.PORT || 3008
  };
};
