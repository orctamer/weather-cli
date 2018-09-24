const axios = require('axios')
const config = require('../config')
module.exports = async () => {
    const results = await axios({
        method: 'get',
        url: 'https://api.ipdata.co?api-key='+config.ipkey,
    })

    const { city, region } = results.data
    return `${city}, ${region}`
}