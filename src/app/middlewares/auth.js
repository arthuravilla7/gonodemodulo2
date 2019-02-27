module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user // disponibiliza o user globalmente para as views

    return next()
  }

  return res.redirect('/')
}
