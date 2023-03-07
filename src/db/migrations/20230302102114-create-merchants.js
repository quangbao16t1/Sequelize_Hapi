"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("merchants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      merchant_name: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addColumn("merchants", "conutry_code", {
      type: Sequelize.INTEGER,
      references: {
        model: "countries",
        key: "code",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("merchants", "admin_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("merchants");
    await queryInterface.removeColumn("merchants", "conutry_code");
    await queryInterface.removeColumn("merchants", "admin_id");
  },
};
