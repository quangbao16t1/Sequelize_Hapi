"use strict";
import { Model } from "sequelize";
export default (sequelize: any, DataTypes: any) => {
  class MerchantPeriod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.Merchant, {
        foreignKey: "merchant_id",
      });
      this.belongsTo(models.Country, {
        foreignKey: "contry_code",
      });
    }
  }

  MerchantPeriod.init(
    {
      merchant_id: DataTypes.INTEGER,
      contry_code: DataTypes.INTEGER,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "merchant_periods",
    }
  );

  return MerchantPeriod;
};
