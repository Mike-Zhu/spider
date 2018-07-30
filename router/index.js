const router = require('koa-router')();
const {
    index,
    search,
    single
} = require('./spider')

router
    .get(`/index`,index )
    .get(`/search`, search)
    // .get(`/single`, single)
// .get('*', defaultUrl)

module.exports = router