// grab the nerd model we just created
var Movie = require('./models/movie');

module.exports = function(app) {
    // Server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/movie/:id', function(req, res) {
        // use mongoose to get all movies in the database
        Movie.find(function(err, movie) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(movie); // return all movies in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // Frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile("/public/index.html", {"root": __dirname});
    });
};