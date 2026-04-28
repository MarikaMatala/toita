const login = (req, res, next) => {
  console.log(req.query)
  
  const { login } = req.query
  if (login === 'marika') {
    console.log('login')
    next()
  }
  else {
    next(new Error('Unauthorized'))
  }
}

module.exports = login