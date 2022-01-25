const { default: terminal, State } = require("@skylixgh/nitrojs-terminal");
const fs = require("fs");
const path = require("path");
const mergeObj = require("merge-deep");

module.exports = function resolveConfig() {
  let resolvedConfig = {};
  const defaultConfig = {
    token: "password123",
    port: 5000,
    bot: {
      token: "",
      name: "",
      avatar: "",
      receiver: "",
    },
  };

  terminal.animate("Loading configuration");

  if (!fs.existsSync(path.join(__dirname, "../../config.js"))) {
    terminal.stopAnimation(
      State.warning,
      'The configuration was not detected in the root directory, we recommend creating one :) called "config.js"'
    );
    return defaultConfig;
  }

  let configModule;

  try {
    configModule = require("../../config.js");
  } catch (error) {
    terminal.stopAnimation(State.error, "Failed to load your configuration");
    error.stack.split("\n").forEach((line) => {
      terminal.error(line);
    });

    process.exit(0);
  }

  if (typeof configModule != "object") {
    terminal.stopAnimation(
      State.error,
      "Failed to load config because an object was not exported"
    );
    process.exit(0);
  }

  if (Array.isArray(configModule)) {
    terminal.stopAnimation(
      State.error,
      "Failed to load config because an array was exported instead of a JSON object"
    );
    process.exit(0);
  }

  resolvedConfig = configModule;
  return mergeObj(defaultConfig, resolvedConfig);
};
