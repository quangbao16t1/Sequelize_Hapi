import { DataTypes, Model, Optional } from "sequelize";
// import { sequelize, DataTypes } from "./index";

// const Country = sequelize.define("countries", {
//   code: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   continent_name: {
//     type: DataTypes.STRING,
//     defaultValue: false,
//     allowNull: false,
//   },
// }, {timestamps: false});

// export default Country;

import { sequelize } from ".";

interface CountryAttributes {
  code: number;
  name: string;
  continent_name: string;
}

interface CountryCreationAttributes
  extends Optional<CountryAttributes, "code"> {}
  export interface CountryOuput extends Required<CountryAttributes> {}


interface CountryInstance
  extends Model<CountryAttributes, CountryCreationAttributes>,
    CountryAttributes {}

const Country = sequelize.define<CountryInstance>(
  "countries",
  {
    code: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent_name: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
    },
  },
  { timestamps: false });

export default Country;
