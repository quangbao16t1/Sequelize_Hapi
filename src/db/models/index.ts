import dotenv from 'dotenv';
import { configDb } from "../config/config";
import { Sequelize, DataTypes } from "sequelize";

dotenv.config();

// const POSTGRES_URL = process.env.DATABASE_URL as unknown as string;
// const sequelize = new Sequelize(POSTGRES_URL);
const sequelize = new Sequelize(configDb.database, configDb.username, configDb.password, {
  host: 'localhost',
  dialect: 'postgres'
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export { connectDB, sequelize, Sequelize, DataTypes };