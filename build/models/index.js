var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var indexSchema = new Schema({
    "id":Number,
    "bride":[
        {
            "name":String
        }
    ],
    "groom":[
        {
            "name":String
        }
    ]
});

var Index = mongoose.model('Index',indexSchema);

module.exports = Index;