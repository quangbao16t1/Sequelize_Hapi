"use strict";
import { Model, ModelStatic } from "sequelize";

export default (sequelize: any, DataTypes: { STRING: any; INTEGER: any; DATE: any; }) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: { Merchant: ModelStatic<Model<any, any>>; OrderItem: ModelStatic<Model<any, any>>; ProductTag: ModelStatic<Model<any, any>>; }) {
      // define association here
      this.belongsTo(models.Merchant, {
        foreignKey: 'merchant_id'
      });
      this.hasMany(models.OrderItem)
      this.hasMany(models.ProductTag)
    }
  }

  Product.init(
    {
      name: DataTypes.STRING,
      merchant_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      status: DataTypes.STRING,
      created_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  
  return Product;
};
