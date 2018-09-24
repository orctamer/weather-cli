const minimist = require('minimist')
const chalk = require('chalk')

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help'
    if (args.version || args.v) {
        cmd = 'version'
    }
    if (args.help || args.h) {
        cmd = 'help'
    }

    switch(cmd) {
        case 'today' :
        require('./cmd/today') (args)
        break
        case 'version' :
        require('./cmd/version') (args)
        break
        case 'help' :
        require('./cmd/help') (args)
        break
        case 'forecast':
        require('./cmd/forecast') (args)
        break
        default:
            const msg = chalk.yellow(`"${cmd}"`) + chalk.red(' is not a valid command!')
            console.error(`${cmd ? msg : chalk.red('Please enter a command!')} Please type ${chalk.blue('weather help')} for more information.`)
    }
}