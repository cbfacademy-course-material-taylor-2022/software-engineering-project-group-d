const mongoose = require("mongoose");
const User = mongoose.model("users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");


// const userRoutes = (app) => {
//    //this is for registering:
//   app.post(`/api/register`,async (req,res) =>{
//     const {firstname, lastname, email, password} = req.body
//     if (!firstname ||!lastname ||!email ||!password){
//       res.status(400)
//       throw new Error("Please add all fields")
//     }
//     res.json({message: "Register User"})
//   })


  //This is for signing in:
  app.post(`/api/signin`, async (req, res) => {
    const users = await User.find();
//consider JWT auth tokens
//this is checking for email and password and making sure they match the input
    console.log(users);
    const {email, password} = req.body;

    const loggedin = users.filter((user) => {
     return user.email == email && user.password == password; 
    }).length >0
    
    return res.status(201).send({
      error: false,
      validuser: loggedin,
      // user,
    });
  })
  // app.get(`/api/user`, async (req, res) => {
  //   const users = await User.find();

  //   return res.status(200).send(users);
  // });

  // app.post(`/api/user`, async (req, res) => {
  //   const user = await User.create(req.body);

  //   return res.status(201).send({
  //     error: false,
  //     user,
  //   });
  // });

  // app.put(`/api/user/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const user = await User.findByIdAndUpdate(id, req.body);

  //   return res.status(202).send({
  //     error: false,
  //     user,
  //   });
  // });

  // app.delete(`/api/user/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const user = await User.findByIdAndDelete(id);

  //   return res.status(202).send({
  //     error: false,
  //     user,
  //   });
  // });
// };

module.exports = userRoutes;
