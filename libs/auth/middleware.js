const pug = require('pug');

module.exports = async function(ctx, next) {
  if (ctx.user) {
    return await next();
  } else {
    ctx.body = pug.renderFile(`${__dirname}/auth.pug`);
  }
};
