const mongoose = require("mongoose");
const User = mongoose.model("users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { protect } = require('../middleware/authMiddleware')



const userRoutes = (app) => {
//    //this is for registering new user info to mongodb: 
  app.post(`/api/register`, async (req,res) =>{
    const {first_name, last_name, email, password} = req.body

//- first I throw an error if all fields are not filled
    if (!first_name || !last_name || !email || !password){
      res.status(400)
      alert('Please add all fields')
    }

//check if user exists by email
    const userExists = await User.findOne({email})
    if (userExists){
      alert('User already exists')
      res.status(400)
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
        token: generateToken(user._id),
      })
    }else {
      alert("Invalid user data")
      res.status(400)
      
    }
    console.log(req.body)
  })

//auth new user
app.post(`/api/user/auth`,async (req,res) =>{
  const { email, password } = req.body

// Check for user email
  const user = await User.findOne({email})
//because the password the user will be entering is not encrypted 'bcrypt compare is used'
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      first_name: user.first_name,
      email: user.email,
      token: generateToken(user._id),
    },
  
    )
  } else {
    res.status(400)
    console.log(req.body, "Invalid credentials")
  }

})
  // @desc    Get user data
  // @route   GET /api/user/me
  // @access  Private

  app.get(`/api/user/me`,async (req,res,next) =>{
    protect(req,res,next)
    console.log(res.statusCode)
    if (res.statusCode < 300){
      res.send("Secure Login")
     return res.status(200).json(req.user)

      
    } 
    
  })
    

  // Generate JWT
    const generateToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      })
    }
};

module.exports = userRoutes;
