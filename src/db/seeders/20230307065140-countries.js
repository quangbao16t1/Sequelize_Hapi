"use strict";

/** @type {import('sequelize-cli').Migration} */

const countries = require("../data/countries.json");

module.exports = {
  async up(queryInterface, Sequelize) {
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
    //     name: faker.name.firstName(),
    //     continent_name: faker.internet.email(),
    //   });
    // }
    await queryInterface.bulkInsert("countries", countries, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("countries", null, {});
  },
};
