'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('divides', [{
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
