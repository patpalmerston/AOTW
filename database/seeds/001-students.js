
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').insert([
    { studentname: 'student 1', password: 'pass', level: 1 }, // 1
    { studentname: 'student 2', password: 'pass', level: 2  }, // 2
    { studentname: 'student 3', password: 'pass', level: 3  }, // 3
    { studentname: 'student 4', password: 'pass', level: 4  }, // 4
  ]);
};
