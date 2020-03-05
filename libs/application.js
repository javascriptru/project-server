const Koa = require('koa');

module.exports = class Application extends Koa {
  constructor(options) {
    super(options);

    this.log = require('./log')();
    if (options.publicRoot) {
      this.use(require('koa-static')(options.publicRoot));
    }
    this.use(require('koa-bodyparser')());
    require('../handlers/requestId')(this);
    require('../handlers/requestLog')(this);
    require('../handlers/nocache')(this);
    require('../handlers/error')(this);

    if (options.cors) {
      this.use(require('@koa/cors')({maxAge: 86400}));
    }
    this.publicRoot = options.publicRoot;
  }

  run() {
    return this.listen({

    });
  }

};
