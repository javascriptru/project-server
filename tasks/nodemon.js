const nodemon = require('nodemon');

module.exports = async function() {

  nodemon({
    ext:      "js",
    verbose:  true,
    delay:    10,
    env:      {
      NODE_ENV: process.env.NODE_ENV || "development"
    },
    args:     ['server'],
    nodeArgs: process.env.DEBUG ? ['--inspect'] : [],
    script:   "./node_modules/.bin/gulp",
    watch:    ["*"],
  });

  await new Promise(resolve => {
  });
};
