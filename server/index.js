require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

mongoose.connect("mongodb+srv://Passion4Travel:Passion4Travel@cluster0.c7skzpl.mongodb.net/Passion4Travel?retryWrites=true&w=majority");

// IMPORT YOUR SCHEMAS HERE
const UserModel = require("./models/Users");
const ProfileModel = require("./models/Profiles")


const app = express();


// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
// app.post("/signin",)

// IMPORT YOUR API ROUTES HERE

require("./routes/usersRoutes")(app); 
require("./routes/profilesRoutes")(app); 

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
  })





