const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(users) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(async function(id, done) {
    done(null, users.find(user => user.id === id) || false);
  });

  passport.use(new LocalStrategy(function(login, password, done) {
    let user = users.find(user => user.login === login && user.password === password);

    done(null, user || false);
  }));

};

