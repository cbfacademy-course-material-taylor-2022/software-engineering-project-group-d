const mongoose = require("mongoose");
const Profile = mongoose.model("profiles");
const User = mongoose.model("users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { protect } = require('../middleware/authMiddleware')

const profilesRoutes = (app) => {



// Send email address to get bio display

app.post(`/api/user/profile`, async (req,res) =>{
  const {bio, age, email, gender} = req.body

//- first I throw an error if email not filled
  if (!email){
    res.status(400)
    alert('Please add email')
  }

//check if user exists by email
  // const userExists = await Profile.findOne({email})
  // if (userExists){
  //   res.status(200)
  //   console.log(res.body, "User info")
    
  
  // }

  
  const bioUpdate = Profile.updateOne({$set:{bio, age, email, gender}})

  if(bioUpdate) {
    res.status(202).json({
      bio, age, email, gender
    })
  }else {
    alert("Invalid user data")
    res.status(400)
    
  }
  // else{
  //   Profile.create({bio, age, email, gender})
  //   res.status(202).json({
    
  //    bio: user.bio,
  //     email: user.email,
  //     gender: user.gender,
  //     age: user.age})
  // }


//updating a user info - this adds the req user info to our database
 
//   console.log(req.body)
})
}

module.exports = profilesRoutes;