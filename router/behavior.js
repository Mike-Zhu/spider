const http = require('../service/http')

var page = {
    "referer": "http://weixin.sogou.com/weixin?type=1&query=关键词",
}
module.exports = {
    searchFromSG,
    searchTarget
}

async function searchFromSG(name) {
    let { referer } = page
    referer = referer.replace('关键词', encodeURIComponent(name))
    const content = await http.get(referer)
    return content
}
//公众平台搜索

// 需要提交的data
// 以下个别字段是否一定需要还未验证。
// 注意修改yourtoken,number
// number表示从第number页开始爬取，为5的倍数，从0开始。如0、5、10……
// token可以使用Chrome自带的工具进行获取
// fakeid是公众号独一无二的一个id，等同于后面的__biz

async function searchTarget(name) {
    const targetUrl = "https://mp.weixin.qq.com/cgi-bin/appmsg"
    const headers = {
        "Cookie": yourcookie,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36",
    }
    let number = 0
    data = {
        "token": yourtoken,
        "lang": "zh_CN",
        "f": "json",
        "ajax": "1",
        "action": "list_ex",
        "begin": number,
        "count": "5",
        "query": "",
        "fakeid": yourfakeid,
        "type": "9",
    }
}