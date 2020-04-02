
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {id: 1, username: 'ydavis', password: 'test'},
        {id: 2, username: 'emmccabe', password: 'test'},
        {id: 3, username: 'ljuskevi', password: 'test'},
        {id: 4, username: 'fbergqui', password: 'test'}
      ]);
    });
};
