const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8, 32}$')
      )
    }
    const { error, value } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a proper email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Please provide a valid password matching the following conditions:<br>
                    1. It must be alphanumeric<br>
                    2. It must have at least 8 and not more than 32 characters long`
          })
          break
        default:
          res.status(400).send({
            error: 'Unknown error happened'
          })
          break
      }
    } else {
      next()
    }
  }
}
