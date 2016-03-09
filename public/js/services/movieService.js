angular.module('movieService', []).factory('Movie', ['$http', function($http) {
    return {
        // call to get all movies
        //get : function() {
        //    return $http.get('/api/movies');
        //}

        // These will work when more API routes are defined on the Node side of things
        // call to POST and create a new movie
        //create : function(movieData) {
        //    return $http.post('/api/movies', movieData);
        //},

        // call to DELETE a movie
        //delete : function(id) {
        //    return $http.delete('/api/movies/' + id);
        //}
    }
}]);