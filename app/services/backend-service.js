const Kinvey = require("kinvey-nativescript-sdk").Kinvey;
const kinveyAppKey = "kid_BJqaEF5bN";
const kinveyAppSecret = "0953c788457142adb14178157b4009ad";
const kinveyUsername = "admin";
const kinveyPassword = "admin";

exports.setup = function () {
    Kinvey.init({
        appKey: kinveyAppKey,
        appSecret: kinveyAppSecret
    });
};
