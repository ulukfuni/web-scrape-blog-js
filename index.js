const cheerio = require('cheerio')
const axios = require('axios')

module.exports =  async function scrape() {
    const response = await axios.get('https://www.basketball-reference.com/players/w/wadedw01.html')
    const $ = cheerio.load(response.data)
    return $('.stats_pullout').html()
}