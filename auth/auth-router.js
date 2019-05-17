const router = require('express').Router(); 
const bcrypt = require('bcryptjs');

const tokenService = require('./token-service');
const db = require('../students/students-model')


router.post('/register', (req, res) => {
  let student = req.body;
  const hash = bcrypt.hashSync(student.password, 10);
  student.password = hash;

  db.add(student)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.post('/login', (req, res) => {
  let { studentname, password } = req.body;

  db.findBy({ studentname })
    .first()
    .then(student => {
      if (student && bcrypt.compareSync(password, student.password)) {
        const token = tokenService.generateToken(student);
        res.status(200).json({
          message: `Welcome ${student.studentname}!, have a token...`,
          token,
          level: student.level
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error)
    });
});

module.exports = router;