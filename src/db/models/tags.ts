'use strict';
import { Model, ModelStatic } from 'sequelize';

export default (sequelize: any, DataTypes: { STRING: any; DATE: any; }) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: { ProductTag: ModelStatic<Model<any, any>>; }) {
      // define association here
      this.hasMany(models.ProductTag);
    }
  }
  Tag.init({
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'tags',
  });
  
  return Tag;
};