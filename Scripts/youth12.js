
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://script.baertt.com/count2/callback?si=e03fa7f144bac0bb93241ad9deb05t34&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fws_zero%253Fsignature%253DbDm0KxOyWQGgYNjrBV4jAxdnZtBeWZ21oLpzq253Av968kJPEM%2526scene_id%253Dhome_feed%2526share_id%253D51357920410143921638175825%2526time%253D1638175825&_=1638175835460&jsonpcallback=jsonp5`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Referer' : `https://focus.youth.cn/`,
'Host' : `script.baertt.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001031) NetType/WIFI Language/zh_CN`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
