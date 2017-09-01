/**
 * Created by todd on 9/1/2017.
 */
var express = require('express');


var app = express();
var ejs = require('ejs');
app.use(express.static('public')); // set up the public directory as web accessible


app.get('/', function (req, res) {
    //   res.render('test.ejs', { title: 'LED' });
    res.render('helloworld.ejs', { title: 'LED' });
});


// this is the fall through - if nothing else matches

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.send(500, 'Something broke!');
});
var server = app.listen(80, function () {
    //console.log('Http server listening at http://%s:%s', host, port);
    //console.log(ll.ansi('brightBlue','Webserver listening at http://'+settings.info.externalipaddress+':'+settings.options.webserver.listenport));

});
