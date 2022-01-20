const terminal = require('@skylixgh/nitrojs-terminal');
function listen(app, port) {
    app.listen(port, () => {
        terminal.animate('Starting...');
        setTimeout(() =>  {
            terminal.updateAnimation('Preparing the website...')
            setTimeout(() =>  {
                terminal.updateAnimation('Listening on port ' + port)
            },2000)
        },2000)
    })
}


module.exports = {listen}
