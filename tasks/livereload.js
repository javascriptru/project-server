let livereload = require('gulp-livereload');
let chokidar = require('chokidar');

module.exports = async function({
  watch
}) {
  livereload.listen();

  setTimeout(function() {
    console.log("livereload: listen on change " + watch);

    chokidar.watch(watch, {
      awaitWriteFinish: {
        stabilityThreshold: 300,
        pollInterval:       100
      }
    }).on('change', (changed) => {
      livereload.changed(changed);
    });

  }, 1000);

  await new Promise(resolve => {});
};

