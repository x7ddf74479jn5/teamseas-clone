const defaultConfig = require("config/eslint-server");

module.exports = {
  root: true,
  ...defaultConfig,
  ignorePatterns: [...defaultConfig.ignorePatterns, "@generated"],
};
