const path = require('path');
const {task, series, parallel} = require('gulp');

exports.Application = require('./libs/application');
exports.ecosystem = require('./libs/ecosystem.config');

exports.addTasks = function({ publicRoot }) {
  task('server', require('./tasks/server'));

  task('nodemon', require('./tasks/nodemon'));

  task('livereload', require('./tasks/livereload').bind(null, {
    watch: [path.join(publicRoot, "**/*.*")]
  }));

  task('dev', parallel('nodemon', 'livereload'));
};
