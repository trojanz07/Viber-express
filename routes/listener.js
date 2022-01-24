const { State } = require('@skylixgh/nitrojs-terminal');
const terminal = require('@skylixgh/nitrojs-terminal');
const resolveConfig = require('./utils/resolveConfig');

let currentConfig = {};

function initiateConfigLoader() {
    terminal.animate("Resolving your configuration");
    currentConfig = resolveConfig();
    terminal.stopAnimation(State.success, "Configuration loaded");
}

function listen(app, port) {
    terminal.animate("Starting your server");
    
    app.listen(port, () => {
        terminal.stopAnimation(State.success, 'Listening on port ' + port);
    });
}

function getCurrentConfig() {
    return { ...currentConfig };
}

module.exports = {listen, getCurrentConfig, initiateConfigLoader}
