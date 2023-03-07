'use strict';
import { Model } from 'sequelize';

export default (sequelize: any, DataTypes: any) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.User, {
        foreignKey: 'admin_id'
      });
      this.belongsTo(models.Country, {
        foreignKey: 'country_code'
      });
      this.hasMany(models.Product);
      this.hasMany(models.MerchantPeriod);
    }
  }

  Merchant.init({
    merchant_name: DataTypes.STRING,
    country_code: DataTypes.INTEGER,
    admin_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'merchants',
  });

  return Merchant;
};