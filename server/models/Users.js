const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: 
    {type: String,
    },
  last_name: 
    {type: String,
    },
  email: 
    {type: String,
    },
  password: 
    {type: String,
    },
  bio: 
  {type: String,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [], 
  }
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
