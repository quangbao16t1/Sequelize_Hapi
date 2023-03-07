import { DataTypes, Model, Optional } from "sequelize";

// const User = sequelize.define("users", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   full_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   country_code: {
//     type: DataTypes.INTEGER,
//     defaultValue: false,
//     allowNull: false,
//   },
//   created_at: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//     allowNull: false,
//   },
//   updated_at: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//     allowNull: false,
//   },
// });

import { sequelize } from ".";
import Country from "./countries";

interface UserAttributes {
  id: number;
  full_name: string;
  conutry_code: number;
  created_at?: Date;
  updated_at?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
export interface UserOuput extends Required<UserAttributes> {}


interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  created_at?: Date;
  updated_at?: Date;
}

const User = sequelize.define<UserInstance>(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conutry_code: {
      type: DataTypes.INTEGER,
      defaultValue: false,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  { timestamps: false }
);

User.belongsTo(Country, {
  foreignKey: "conutry_code",
  as: "country",
});

Country.hasMany(User, {
  sourceKey: "code",
  foreignKey: "conutry_code",
  as: "users",
});

export default User;
