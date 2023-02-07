const mongoose = require("mongoose");
const { Schema } = mongoose;


const profileSchema = new Schema({
  bio: 
    {type: String,
    },
  age:{type: String,
  },
  gender: 
    {type: String,
    },
  email: 
    {type: String,
      
    },
});

const ProfileModel = mongoose.model("profiles", profileSchema);
module.exports = ProfileModel;