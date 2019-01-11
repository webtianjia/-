// 云函数入口文件
const cloud = require('wx-server-sdk');
let crypto = require('crypto');

let secretId = 'AKID42uvqoUW8qTwENhkBRVSE62udJlk3QOI',
    secretKey = 'udAWhrxrcB90FuPn9ORIzUs5lNo5GI8r',
    appid = '1253407082',
    pexpired = 86400,
    userid = 0;
let now = parseInt(Date.now() / 1000),
    rdm = parseInt(Math.random() * Math.pow(2, 32)),
    plainText = 'a=' + appid + '&k=' + secretId + '&e=' + (now + pexpired) + '&t=' + now + '&r=' + rdm + userid + '&f=',
    data = new Buffer(plainText, 'utf8'),
    res = crypto.createHmac('sha1', secretKey).update(data).digest(),
    bin = Buffer.concat([res, data]);
let sign = bin.toString('base64');

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    return {
        event,
        sign,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
    }
}