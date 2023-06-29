// Route handlers
const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')

//import data models
const Todo = require("../barf/task");

// RETREIVE all Todo tasks
/* router.get("userId", function(req,res){
  Todo.find({}, function (err, userId_list){
    res.render("index.ejs", {userId:userId_list});
  });
}); */




module.exports = router;

