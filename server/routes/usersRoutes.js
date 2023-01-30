const mongoose = require("mongoose");
const User = mongoose.model("users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const userRoutes = (app) => {
//    //this is for registering new user info to mongodb: 
  app.post(`/api/register`,async (req,res) =>{
    const {first_name, last_name, email, password} = req.body

//- first I throw an error if all fields are not filled
    if (!first_name || !last_name || !email || !password){
      res.status(400)
      throw new Error('Please add all fields')
    }

//check if user exists by email
    const userExists = await User.findOne({email})
    if (userExists){
      res.status(400)
      throw new Error("User already exists"),
      console.log(req.body, "User already exists")
    }
//hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

//creating a user - this adds the req user info to our database
    const user = await User.create({
      first_name,
      last_name,
      password: hashedPassword,
      email})
    
    if(user) {
      res.status(202).json({
        _id: user.id,
        first_name: user.first_name,
        email: user.email,
      })
    }else {
      res.status(400)
      throw new Error("Invalid user data")
    }
    console.log(req.body)
  })
//auth new user

// const registerUser = await User.findOne({ email })

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid credentials')
//   }

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
};

module.exports = userRoutes;
