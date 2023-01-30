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
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
