const auth = (req, res, next) => {
    // If the user is not logged in, redirect to the login page
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      // If logged in, proceed to allow them to the dashboard
      next();
    }
  };
  
  module.exports = auth;