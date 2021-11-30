
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://script.baertt.com/count2/callback?si=ee359c95a579a73089faf6638ab3q12c&referer=https%253A%252F%252Ffocu.youth.cn%252Fwaphotfive%252F20211124%253Fsid%253D40949729%2526uid%253D59300105%2526timestamp%253D1638248648%2526signature%253DqEkWRmZyvzPO2bBdGX788drrgCVldkP7l36xneA0QpKgM9NYL8%2526scene_id%253Dfire_share%2526share_id%253D59300105409497291638248657%2526time%253D1638248657&_=1638248670330&jsonpcallback=jsonp6`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Referer' : `https://focu.youth.cn/`,
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
