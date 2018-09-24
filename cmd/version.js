const { version } = require('../package.json')
const chalk = require('chalk')

module.exports = () => {
    console.log(chalk.blue(`v${version}`))
}