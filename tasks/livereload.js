let livereload = require('gulp-livereload');
let chokidar = require('chokidar');

module.exports = function(app) {

  return async function() {
    livereload.listen();

    setTimeout(function() {
      console.log("livereload: listen on change " + app.publicRoot);

      chokidar.watch([path.join(app.publicRoot, "**/*.*")], {
        awaitWriteFinish: {
          stabilityThreshold: 300,
          pollInterval:       100
        }
      }).on('change', (changed) => {
        livereload.changed(changed);
      });

    }, 1000);

    await new Promise(resolve => {
    });
  };

};
