// Dependencies
// -----------------------------------------------------
var express         = require('express');
var fs              = require('fs');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');
var morgan          = require('morgan');
var sass            = require('node-sass');
var path            = require('path');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');

var app = express();
var db = require('./config/db');

// Logging and Parsing
// -----------------------------------------------------
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// Handle the routes
require(path.join(__dirname, '/app/routes'))(app);

// Handle 404 errors
// ------------------------------------------------------
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Compile the sass
// ------------------------------------------------------
sass.render({
    file: path.join(__dirname, '/sass/main.scss'),
    outFile: path.join(__dirname, '/public/css/main.css'),
    outputStyle: 'compressed'
}, function(error, result) {
    if(!error){
        fs.writeFile(path.join(__dirname, '/public/css/main.css'), result.css, function(err){
            if(!err){
                console.log('Sass has been saved.')
            }
        });
    }
});

// Listen
// -------------------------------------------------------
var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;