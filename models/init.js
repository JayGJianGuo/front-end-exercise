var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:32772/front-end-exercise', {
    useMongoClient: true
});