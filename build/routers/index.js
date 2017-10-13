var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Index = require('../models/index');

mongoose.connect('mongodb://127.0.0.1:27017/wedding');

mongoose.connection.on("connect",function(){
    console.log("MongoDB connected success.");
})
mongoose.connection.on("error", function () {
    console.log("MongoDB connected fail.")
});
mongoose.connection.on("disconnected", function () {
    console.log("MongoDB connected disconnected.")
});
router.get("/index",function(req,res,next){
    Index.findOne({},function(err,doc){
        if(doc){
            res.json({
                status:'0',
                result:doc
            })
        }
    });
})

module.exports = router;