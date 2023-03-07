'use strict';
import { Model } from 'sequelize';
export default (sequelize: any, DataTypes: { INTEGER: any; STRING: any; DATE: any; }) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      this.hasMany(models.OrderItem)
    }
  }
  
  Order.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders',
  });

  return Order;
};