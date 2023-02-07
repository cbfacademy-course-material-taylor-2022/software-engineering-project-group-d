//middleware is used as a bridge between database and applications
//this code was taken from 'https://github.com/bradtraversy/mern-tutorial/blob/main/backend/middleware/authMiddleware.js'

const jwt = require('jsonwebtoken')
const User = require('../models/Users')

const protect = async (req, res, next) => {
    let token
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        // Get token from header - 'split' changes it into an array
        token = req.headers.authorization.split(' ')[1]
  
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
  
        // Get user from the token
        req.user = await User.findById(decoded.id).select('-password')
  
        next()
      } catch (error) {
        console.log(error)
        res.status(401)
        res.send(error.message)
      }
    }
  
    if (!token) {
      res.status(401)
      res.send('Not authorized, no token')
    }

  }
  // app.use(function (req, res, next) {

  //   // Website you wish to allow to connect
  //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  //   // Request methods you wish to allow
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  //   // Request headers you wish to allow
  //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  //   // Set to true if you need the website to include cookies in the requests sent
  //   // to the API (e.g. in case you use sessions)
  //   res.setHeader('Access-Control-Allow-Credentials', true);

  //   // Pass to next layer of middleware
  //   next();
// });
  
  module.exports = { protect }
  