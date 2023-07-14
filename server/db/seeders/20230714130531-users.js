'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        { name: 'Alex', email: '1@1', hashpass: bcrypt.hashSync('123', 10) },
        { name: 'Bob', email: '2@2', hashpass: bcrypt.hashSync('123', 10) },
        { name: 'Carl', email: '3@3', hashpass: bcrypt.hashSync('123', 10) },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
