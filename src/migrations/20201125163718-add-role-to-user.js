'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'RoleId',
      {
          type: Sequelize.INTEGER,
          references: {
            model: 'roles',
            key: 'id',
          },
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'RoleId',
    )
    }
};
