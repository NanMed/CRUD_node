
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Balon de futbol', description: "Balon para adultos", price: 222},
        {id: 2, name: 'Pelota de tennis', description: "Buen equipo", price: 150},
        {id: 3, name: 'Ping pong', description: "Juega en familia", price: 340}
      ]);
    });
};
