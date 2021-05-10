const express = require('express')
const router = express.Router()
const { signup, signin, signout, requireSignin } = require('../../controllers/auth/auth')

// Validators
const {runValidation} = require('../../validators')
const {userSignupValidator, userSigninValidator} = require('../../validators/auth')

// Signup
router.post('/signup', userSignupValidator, runValidation, signup)

// Signin
router.post('/signin', userSigninValidator, runValidation, signin)

// Signout
router.get('/signout', signout)

// Test
router.get('/secret', requireSignin, (req,res) => {
    res.json({
        user: req.user
    })
})
module.exports = router