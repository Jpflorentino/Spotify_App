'use strict'
const express = require("express")
const passport = require('passport')

module.exports = () => {

    const router = express.Router()

    const mongoDB = {

    }

    router.use(express.json())
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((userId, done) => authDB
        .getUser(userId)
        .then(user => done(null, user))
        .catch(err => done(err))
    )

    //UI
    router.use(express.urlencoded({
        extended: true
    }))


    //AUTHETICATION
    router.get('/covida/auth/login', covidaUI.loginForm)
    router.post('/covida/auth/login', covidaUI.login)
    router.get('/covida/auth/register', covidaUI.registerForm)
    router.post('/covida/auth/register', covidaUI.register)
    router.get('/covida/auth/logout', covidaUI.logout)
    router.get('/covida/auth/delete', covidaUI.deleteAccountForm)
    router.post('/covida/auth/delete', covidaUI.deleteAccount)

    return router
}