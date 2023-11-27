import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Sequelize configuration file
import Admin from "./Admin";

const testDetails = sequelize.define("test_details", {
  test_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  test_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  test_detail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  test_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  test_interpretation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default testDetails;
