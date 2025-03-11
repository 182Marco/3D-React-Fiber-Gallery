const path = require("path");

module.exports = function override(config, env) {
  config.plugins[0].options.template = path.resolve(
    __dirname,
    "public",
    "index.html",
  );

  return config;
};
