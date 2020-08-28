const mong = require('mongoose')
const shortID = require('shortid')

const shortURLSchema = new mong.Schema({
    full:{
        type: String, 
        required: true
    },
    short: {
        type: String, 
        required: true,
        default: shortID.generate
    },
    clicks: {
        type: Number, 
        required: true,
        default: 0
    }
})

module.exports = mong.model('ShortUrl', shortURLSchema)