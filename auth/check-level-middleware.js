module.exports = level => {
  return function(req, res, next) {
    if (req.decodedJwt.level && req.decodedJwt.level.includes(level)) {
      next();
    } else {
      res.status(403).json({ Level: 'Practice more to reach this level' })
    }
  }
}

// is levels appropriate?