const chalk = require('chalk');
function listen(app, port) {
    app.listen(port, () => {
        console.log(chalk.bold.grey('Starting...'))
        console.log(chalk.bold.grey('Preparing the website...'))
        console.log(chalk.bold.red(`Listening on port ${port}`))
    })
}


module.exports = {listen}