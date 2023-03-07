"use strict";
import { Model, ModelStatic } from "sequelize";

export default (sequelize: any, DataTypes: { STRING: any; }) => {
  class ProductTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: { Tag: ModelStatic<Model<any, any>>; Product: ModelStatic<Model<any, any>>; }) {
      // define association here
      this.belongsTo(models.Tag, { foreignKey: "tag_id" });
      this.belongsTo(models.Product, { foreignKey: "product_id" });
    }
  }
  ProductTag.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "product_tags",
    }
  );

  return ProductTag;
};
