const ora = require('ora')
const getWeather = require('../utils/weather')
const chalk = require('chalk')
const getLocation = require('../utils/location')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l || await getLocation()
    const weather = await getWeather(location)

    spinner.stop()
    console.log(`Forecast for ${chalk.yellow(`${location}`)}:`)
    weather.forecast.forEach(item =>
      console.log(chalk.blue(`\t${item.date} - Low: ${item.low}°F | High: ${item.high}°F | ${item.text}`)))
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}