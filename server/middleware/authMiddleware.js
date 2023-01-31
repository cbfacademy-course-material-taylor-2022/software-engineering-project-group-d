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
  
  module.exports = { protect }
  