// Dependencies
// -----------------------------------------------------
var express         = require('express');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var morgan          = require('morgan');
var methodOverride  = require('method-override');
var sass            = require('node-sass');
var fs              = require('fs');
var app             = express();

// Express Configuration
// -----------------------------------------------------
// Sets the connection to MongoDB
// mongoose.connect("mongodb://localhost/MeanMapApp");

// Logging and Parsing
app.use(express.static(__dirname + '/public'));                 // sets the static files location to public
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // Use BowerComponents
app.use(morgan('dev'));                                         // log with Morgan
app.use(methodOverride());

// Routes
// ------------------------------------------------------
// require('./app/routes.js')(app);

// Compile the sass
// ------------------------------------------------------
sass.render({
    file: __dirname + '/public/style.scss',
    outFile: __dirname + '/public/style.css',
    outputStyle: 'compressed'
}, function(error, result) {
    if(!error){
        fs.writeFile(__dirname + '/public/style.css', result.css, function(err){
            if(!err){
                console.log('Sass has been saved.')
            }
        });
    }
});

// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);
