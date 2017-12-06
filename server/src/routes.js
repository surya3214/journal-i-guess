module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello world! Server is running'
    })
  })

  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}! Your account has been registered`
    })
  })
}
