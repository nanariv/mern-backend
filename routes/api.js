// Route handlers
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//import data models
const Task = require("../barf/task");
const User = require("../barf/user");

router.get("/", function (req, res) {
  res.render("index.ejs");
});

//RETRIEVE a specific user
router.get("/users/:userid", function (req, res) {
  console.log("Inside function - user/userid");
  User.findById(req.params.userid, function (err, user) {
    if (err) {
      console.log(err);
    }
    res.status(201).send(user);
  });
});
router.post("/login", function (req, res) {
  console.log("Validating password");
  User.findOne(req.params.username, function (err, user) {
    if (err) {
      console.log(err);
    }
    res.status(201).send({id:user._id});
  });
});

// Filter by email id's provided by user
// Fetch userid using emailId
// router.get("/userID", function (request, response) {
//   // get the emailid from the user
//   let query = request.query.emailId;
//   console.log("emailid from user " + query);
//   User.find({ "emailId": "ris90@pitt.edu" }, function (err, user) {
//   response.status(201).send(user.username);
//   });
// });

//login API
// router.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/static/login.html');
// });
// router.post("/login", (req, res) => {
//     const user = User.findOne({username: req.body.username,password:req.body.password}, function (err, user) {
//     res.status(201).send(user);
//   });
//     // if (user) {
//     //   res.status(400).json({
//     //   message: "this user is already registered",
//     //   data: {}
//     //   });
//     // };
//   // user.toObject();
//     console.log("LOGIN",user);
//     res.status(200).send({
//       message: "login successful"
//       // ,
//       // data: user
//     });
//   }
// findUser((err,user)=>{
//     if(err) console.log(err);
//     console.log(user)
//     res.status(200).send(user);
// });

// );
  // function findUser(email, callback) {
  //   const foundUser = User.findOne({ emailId: email }, (err, userObj) => {
  //     if (err) {
  //       callback(err);
  //     } else if (userObj) {
  //       callback(null, userObj);
  //     } else {
  //       callback(new Error("Some strange thing has happened"));
  //     }
  //   });
  // };

//CREATE a specific user
router.post("/user", function (req, res) {
  console.log("new user", req.body);
  let user = new User(req.body);
  user.save(); // save to users database
  res.status(201).send("hello");
});

//CREATE a specific task
router.post("/task", function (req, res) {
  console.log("new task", req.body);
  let task = new Task(req.body);
  task.save(); // save to tasks database
  res.status(201).send(task);
});

// //CREATE a specific task for a user
// router.post("/:userid/task", function (req, res) {
//   //console.log("new task", req.body);
//   let task = new Task(req.body);
//   task.save(); // save to tasks database
//   User.findById(req.params.userid, function(err, user){
//     user.tasks.push(task);
//     user.save();
//   });
//   res.status(201).send(task);
// });

//UPDATE task
router.put("/task/:taskid", function (req, res) {
  Task.findById(req.params.taskid, function (err, task) {
    // let new_task = new Task(req.body);
    // task = new_task; // nmot sure this will work
    task.task = req.body.task;
    task.status = req.body.status;
    task.category = req.body.category;
    task.dueDate = req.body.dueDate;
    task.priority = req.body.priority;
    task.userid = req.body.userid;
    task.save();
    res.status(200).json(task);
    if (!task) return res.status(404).send("task does not exist");
  });
});
//get all users
router.get("/users", function (req, res) {
  console.log("getting all users");
  const filter = {};
  (async () => {
    const all = await User.find(filter);
    res.status(201).send(all);
  })();
});
router.get("/tasks", function (req, res) {
  console.log("getting all tasks");
  const filter = {};
  (async () => {
    const all = await Task.find(filter);
    res.status(201).send(all);
  })();
});
// const all = await User.find(filter);
// User.find('', function (err, user) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("USER", all);
//   res.status(201).send(all);
// });
// });

//UPDATE task
router.put("/:userid/status", function (req, res) {
  Task.findById(req.params.userid, function (err, todo_list) {
    Task.userid = req.body.userid;
    todo_list.save();
    res.json(todo_list);
    if (!todo_list) return res.status(404).send("status does not exist");
  });
});

//DELETE
//637bbb15096863f0ec4d5334

// router.delete("/:_id", function (req, res) {
//   Task.findById(req.params.userid, function (err, todo_list) {
//     Task._id = req.body._id;
//     todo_list.save();
//     res.json(todo_list);
//   });
// });


 //  Get userid by emailid
router.post("/emailId", function (request, response) {
  // get the emailid from the user
  let query = request.query.emailId;
  console.log("email entered " + query);

  // if no filter requested, display all the userid
  if (typeof query === "undefined") {
    User.find({}, function (err) {
      response.status(200).send(err);
    });
  } // filter and display only movies > releaseyear
  else {
  User.findOne({ emailId: query }, function (err, user) {
    response.status(200).json({id:user['_id'], username:user['username'] });
    });
  }
});




//DELETE task
router.delete("/task/:taskid", function (req, res) {
  Task.findById(req.params.taskid, function (err, task) {
    task.remove(function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("Task deleted");
      }
    });
  });
});

// Show a 404 for other routes
// router.use(function (request, response) {
//   response.status(404).json({ "Error 404": "Invalid API Request!" });
// });

module.exports = router;
