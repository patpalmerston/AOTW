
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Students', students => {
    students.increments();

    students
      .string('studentname', 128)
      .notNullable()
      .unique();

      students.string('password', 128).notNullable();
      students.string('level', 48).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Students')
};
