'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skills', [{
      name: 'php',
      divide_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()     
    },
    {
      name: 'bootstrap',
      divide_id: '2',
      createdAt: new Date(),
      updatedAt: new Date()     
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};
