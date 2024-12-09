const errorController = (err, req, res, next) => {
  res.status(err.statusCode || 500).render('error-page', {
    title: err.name,
    status: err.statusCode,
    message: err.message,
  });
};

module.exports = { errorController };
