import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Sequelize configuration file
import User from "./User.js";

const Appointment = sequelize.define("appointment", {
  appointment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  appointment_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patient_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  dob: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  appointment_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  appointment_time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  test_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assign_to: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
    },
  },
});

export default Appointment;
