/* eslint-disable prefer-promise-reject-errors */
const { fetchJson } = require('../utils/fetchers')
const { promisify } = require('util')
const { instagram } = require('video-url-link')
const igGetInfo = promisify(instagram.getInfo)

/**
 * Get Instagram Metadata
 *
 * @param  {String} url
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', url)
    const uri = url.replace(/\?.*$/g, '')
    igGetInfo(uri, {})
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

module.exports = {
    insta
}
