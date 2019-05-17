const router = require('express').Router();

const db = require('../students/students-model');

const restricted = require('../auth/restricted-middleware');
const checkLevel = require('../auth/check-level-middleware');

router.get('/', restricted, (req, res) => {
  db.find()
  .then(students => {
    res.json(students);
  })
  .catch(err => res.send(err))
});

router.get('/:id', restricted, (req, res) => {
  db.findById(req.params.id)
    .then(student => {
      res.json(student);
    })
    .catch(err => res.send(err))
});

module.exports = router;