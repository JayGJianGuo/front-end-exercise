var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:32773/front-end-exercise', {
    useMongoClient: true
});