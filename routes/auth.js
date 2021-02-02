const express = require("express");
const passport = require("passport");
const router = express.Router();

//  @desc   Auth with Google
//  @route  GET  /auth/google
//authenticate ('specifying the strategy' to authenticate requests') // we use 'google' which is created in passport.js
// and we want the scope(what's included in the profile )
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//  @desc   Google auth callback
//  @route  GET  /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
  // failureRedirect to '/' which is Login
  // if everythis's correct redirect to /dashboard (main page)
);

// @desc   Logout user
// @route  /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
