
module.exports = async function() {
  let server = app.listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0', () => {
    console.log(`App is running on port ${config.server.port}`);
  });

  await new Promise(res => server.on('close', res));
};
