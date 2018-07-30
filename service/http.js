var http = require('http');

var qs = require('querystring');

module.exports = {
    get: function (url, query) {
        return new Promise((resolve, reject) => {
            query = query || {}
            var content = qs.stringify(query);
            http.get(`${url}?${content}`, function (res) {
                var json = '';
                res.on('data', function (d) {
                    json += d;
                });
                res.on('end', function () {
                    //获取到的数据
                    // json = JSON.parse(json);
                    resolve(json)
                });
            }).on('error', function (e) {
                console.error(e);
            });
        })
    }
}