"use strict";
/** @type {import('sequelize-cli').Migration} */

const tableName = 'order_items';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addColumn(tableName, "order_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "orders",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn(tableName, "product_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
    await queryInterface.removeColumn(tableName, 'order_id');
    await queryInterface.removeColumn(tableName, 'product_id');
  },
};
