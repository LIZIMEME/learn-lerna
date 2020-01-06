const {API}  = require('lz-lerna-once')
const axios = require('axios')

const getTopics = ()=>axios.get(API)

module.exports = getTopics
