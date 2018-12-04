'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('divides', [{
      name: 'Backend',
      image: 'backend.png',
      createdAt: new Date(),
      updatedAt: new Date()      
    },
    {
      name: 'Frontend',
      image: 'frontend.png',
      createdAt: new Date(),
      updatedAt: new Date()      
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('divides', null, {});
  }
};
