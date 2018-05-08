var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var server = app.listen(4001, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("blogpost app listening at http://%s:%s", host, port)
})

app.get('/posts', function(req, res) {
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('blog.db');

    db.all("select * from posts", function(err, rows) {
	if (err) {
	    res.status(500);
	    res.send(); 
	    console.log(err);
	}
	else {
	    res.json(rows);
	}
    });
});

app.post('/post', function(req, res) {
    console.log("req.body: ");
    console.log(req.body);

    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('blog.db');

    var stmt = "insert into posts(title,body) values (?,?)";
    var values = [req.body.title, req.body.body];

    db.run(stmt, values, function(err) {
	if (err) {
	    res.status(500);
	    res.send(); 
	    console.log(err);
	}
	res.send(); 
	console.log('Added a new post to database');
    });
});
