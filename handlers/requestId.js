const uuid = require('uuid/v4');

module.exports = function(app) {
  app.use(async function(ctx, next) {
    ctx.requestId = ctx.get('X-Request-Id') || uuid();
    await next();
  });
};
