const session = require('koa-session');
const setupPassport = require('./setupPassport');
const passport = require('koa-passport');
const Router = require('@koa/router');

module.exports = function(app, users) {

  const sessionConfig = {
    renew: true
  };

  setupPassport(users);

  app.use(session(sessionConfig, app));

  app.use(passport.initialize());
  app.use(passport.session());

  let router = new Router();
  router.post('/login', async (ctx) => {
    return passport.authenticate('local', function(err, user, info, status) {
      if (user === false) {
        ctx.body = {success: false};
        ctx.throw(401);
      } else {
        ctx.body = {success: true};
        return ctx.login(user);
      }
    })(ctx);
  });

  app.use(router.routes());

};
