'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Деньги',
        },
        {
          title: 'Вода',
        },
        {
          title: 'Имена и Фамилии',
        },
        {
          title: 'Историческая тема',
        },
        {
          title: 'Песчаная тема',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};