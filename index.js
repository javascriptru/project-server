const path = require('path');
const {task, series, parallel} = require('gulp');

exports.Application = require('./libs/application');

exports.addTasks = function(app) {
  task('server', require('./tasks/server')(app));

  task('nodemon', require('./tasks/nodemon')(app));

  task('livereload', require('./tasks/livereload')(app));

  task('dev', parallel('nodemon', 'livereload'));
};
