"use strict";
/** @type {import('sequelize-cli').Migration} */

const tableName = 'products_tags';

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
      },
      { timestamps: false }
    );

    await queryInterface.addColumn(
      tableName, // name of Source model
      "tag_id", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "tags", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );

    await queryInterface.addColumn(
      tableName, // name of Source model
      "product_id", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "products", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);

    await queryInterface.removeColumn(tableName, "tag_id");

    await queryInterface.removeColumn(tableName, "product_id");
  },
};
