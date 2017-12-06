const StatusPageController = require('./controllers/StatusPageController')
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.get('/status',
    StatusPageController)

  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
