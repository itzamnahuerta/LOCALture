const express = require('express');
const authRoute = express.Router();
const { passport, jwtSign } = require('../auth/auth')


authRoute.post('/login', async (req,res, next) => {
    passport.authenticate('login', async(err, user, info) => {
    try {
      console.log('error', err);
      if (err || !user) {
        const error = new Error('An Error Occurred')
        return next(error);
      }
      req.login(user, { session : false }, async (error) => {
        if ( error ) return next(error)
        const { email, id } = user
        const payload = { email, id }
        const token = jwtSign(payload)
        // return the user object and token
        return res.json({ user, token })
      })
    } catch(error) {
      return next(error)
    }
  })(req, res, next)
});

authRoute.post('/signup', async (req,res,next) => {
    passport.authenticate('signup', async (err, user, info) => {
        try{
            if (!user || err ) {
              let err = Error('Unable to create account');
              err.status = 400;
              return next(err);
            }
            console.log(user);
            return res.json({message: "User Successfully Created"})
        }
        catch (e) {
            return next(e);
        }
    })(req, res, next)
})

module.exports = { authRoute };


