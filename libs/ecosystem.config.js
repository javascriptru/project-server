module.exports = (name, host, port) => {
  return {
    name,
    script:             "./node_modules/.bin/gulp",
    args:               "server",
    instances:          "1",
    max_memory_restart: "2G",
    error:              `/var/log/node/${name}.err.log`,
    output:             `/var/log/node/${name}.out.log`,
    log:                `/var/log/node/${name}.log`,
    env:                {
      HOST:                        host || "0.0.0.0",
      PORT:                        port || 80,
      NODE_ENV:                    "production",
      PM2_GRACEFUL_LISTEN_TIMEOUT: 1000,
      PM2_GRACEFUL_TIMEOUT:        5000,
      DB_SAVE_DISABLED:            true
    }
  }
};
