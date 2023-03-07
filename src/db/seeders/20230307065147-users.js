'use strict';
const users = require("../data/users.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // var dummyJSON = [];
    // for (var i = 0; i < 50; i++) {
    //   dummyJSON.push({
    //     full_name: faker.nam.full_name(),
    //     continent_name: faker.internet.email(),
    //   });
    // }
    await queryInterface.bulkInsert("users", users, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
