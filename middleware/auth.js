// for example:
// to avoid access to /dashboard without login or
// when we are logged in we can't go back to main login page by typing '/' so we'll be redirected to /dashboard everytime

module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect("/dashboard");
    } else {
      return next();
    }
  },
};
