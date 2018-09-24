const chalk = require('chalk')

const menus = {
    main: `
        weather [command] <options>


        today.............. shows weather for today
        forecast........... shows 10-day weather forecast
        version............ shows package version
        help............... shows help menu for a command
        

        `,
    today: `
        weather today <options>
        
        
        --location -l ..... the location to use`,
    forecast: `
        weather forecast <options>
        
        
        ---location -l .... the location to use`
}

module.exports  = (args) => {
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0]
    let menu = chalk.yellow('__        __         _   _               \r\n\\ \\      \/ \/__  __ _| |_| |__   ___ _ __ \r\n \\ \\ \/\\ \/ \/ _ \\\/ _` | __| \'_ \\ \/ _ \\ \'__|\r\n  \\ V  V \/  __\/ (_| | |_| | | |  __\/ |   \r\n   \\_\/\\_\/ \\___|\\__,_|\\__|_| |_|\\___|_|\r\n\r\n')
    console.log(chalk.blue(menus[subCmd] || menu + menus.main))
}