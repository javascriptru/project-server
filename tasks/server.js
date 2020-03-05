
module.exports = function(app) {
  return async function() {

    let port = process.env.PORT || 80;
    let host = process.env.HOST || '0.0.0.0';

    let server = app.listen(port, host, () => {
      console.log(`App is running on ${host}:${port}`);
    });

    await new Promise(res => server.on('close', res));
  }
};
