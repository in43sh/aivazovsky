module.exports = (req, res, nex) => {
  if(!req.session.user) req.session.user = {

  }
  next()
}