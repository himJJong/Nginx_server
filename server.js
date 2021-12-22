
var express = require("express");
var uuid = require("uuid");

var app = express();
var id = uuid.v4();


app.get("/", function(req, res) {
    res.send(id)
});

app.listen(9700, function() {
    console.log("앱이 9700번 포트에서 실행중입니다....")
});