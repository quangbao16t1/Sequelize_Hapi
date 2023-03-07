"use strict";
/** @type {import('sequelize-cli').Migration} */

const tableName = "merchant_periods";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      tableName,
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        start_date: {
          type: Sequelize.DATE,
        },
        end_date: {
          type: Sequelize.DATE,
        },
      },
      { timestamps: false }
    );

    await queryInterface.addColumn(
      tableName, // name of Source model
      "merchant_id", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "merchants", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );

    await queryInterface.addColumn(
      tableName, // name of Source model
      "country_code", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "countries", // name of Target model
          key: "code", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);

    await queryInterface.removeColumn(tableName, "merchant_id");

    await queryInterface.removeColumn(tableName, "country_code");
  },
};
