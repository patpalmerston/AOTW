const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db('Students').select('id', 'studentname', 'level')
}

function findBy(student) {
  return db('Students').where(student);
}

async function add(student) {
  const [id] = await db('Students').insert(student)

  return findById(id)
}

function findById(id) {
  return db('Students')
    .select('id', 'studentname', 'level')
    .where({ id })
    .first();
}