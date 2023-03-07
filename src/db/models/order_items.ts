'use strict';
import { Model } from 'sequelize';
export default (sequelize: any, DataTypes: any) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      this.belongsTo(models.Order, {
        foreignKey: 'order_id'
      });
      this.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
    }
  }
  
  OrderItem.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'order_items',
  });

  return OrderItem;
};