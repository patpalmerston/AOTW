const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = {
  generateToken,
};

function generateToken(student) {
  const payload = {
    subject: student.id,
    studentname: student.studentname,
    level: student.level

  };

  const options = {
    expiresIn: '1d',
  }

  return jwt.sign(payload, secrets.jwtSecret, options);
}