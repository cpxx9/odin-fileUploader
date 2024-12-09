const { Router } = require('express');
const { displayHome } = require('../controllers/indexController');
const { checkIfLoggedIn } = require('../utils/auth');

const indexRouter = Router();

const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
};

indexRouter.get('/', checkLoggedIn, displayHome);
indexRouter.get('/create-folder', checkIfLoggedIn);
indexRouter.get('/new-file', checkIfLoggedIn);
indexRouter.get('/logout', async (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/login');
  });
});

module.exports = {
  indexRouter,
};
