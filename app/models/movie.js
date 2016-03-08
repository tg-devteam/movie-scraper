// grab the mongoose module
var mongoose = require('mongoose');

// define our movie model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Movie', {
    name : {type : String, default: ''},
    rating: {type : String, default: ''},
    id: {type : String, default: ''}
});