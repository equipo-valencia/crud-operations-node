'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'books',
      'authorId',
      {
          type: Sequelize.INTEGER,
          references: {
            model: 'authors',
            key: 'id',
          },
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'books',
      'authorId',
    )
    }
};
