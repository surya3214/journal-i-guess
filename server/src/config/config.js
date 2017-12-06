module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'journal-i-guess',
    user: process.env.DB_USER || 'journal-i-guess',
    password: process.env.DB_PASS || 'journal-i-guess',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './journal.sqlite'
    }
  }
}