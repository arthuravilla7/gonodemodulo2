const { User } = require('../models')

class UserController {
  create(req, res) {
    return res.render('auth/signup')
  }

  async store(req, res) {
    console.log(req.file)
    const { filename } = req.file

    try {
      await User.create({ ...req.body, avatar: filename })
    } catch (e) {
      console.log(e)
    }

    return res.redirect('/')
  }
}

module.exports = new UserController()
