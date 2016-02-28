var gcm = require('node-gcm');
var apiKey = process.env.TEST_API_KEY;
var deviceID = process.env.TEST_DEVICE_ID;
var service = new gcm.Sender(apiKey);
var message = new gcm.Message();
message.addData('title', '연합뉴스TV');
message.addData('message', '생중계 안내입니다.');
message.addData('ejson', {"category":"URGENT","type":"LIVE","content":"생중계 안내입니다."});
// message.addData('content-available', '1');
service.send(message, { registrationTokens: [ deviceID ] }, function (err, response) {
    if (err) console.error(err);
    else     console.log(response);
});
