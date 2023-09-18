'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('direcciones', [
      {
        calle: 'Canal de la sangria',
        numero: 41,
        ciudad: 'ciudad de mexico',
        delegacion: 'Tlahuac',
        cp: 13529
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
