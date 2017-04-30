var OAuth = require('oauth');
var methods = {}
require('dotenv').config()

// console.log(process.env.TEST_USER_SECRET);

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APPLICATION_CUSTOMER_KEY,
    process.env.APPLICATION_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
);

methods.getData = function(callback) {
    oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=%40welovehonda',
        process.env.TEST_USER_TOKEN, //test user token
        process.env.TEST_USER_SECRET, //test user secret
        function(e, data, res) {
            if (e) {
                // throw new OAuthError
                console.error(e);
            }
            callback(data)
        });
}

methods.getTimeline = function(callback) {
    oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=%40welovehonda&count=10',
        process.env.TEST_USER_TOKEN, //test user token
        process.env.TEST_USER_SECRET, //test user secret
        function(e, data, res) {
            if (e) {
                // throw new OAuthError
                console.error(e);
            }
            callback(data)
        });
}

// getData(function(data) {
//   console.log(data);
// })

module.exports = methods