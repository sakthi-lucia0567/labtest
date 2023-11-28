import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Sequelize configuration file

const Admin = sequelize.define("admin", {
  admin_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Admin;

// Inserting data into the Admin model
// async function insertAdminData() {
//   try {
//     const newAdmin = await Admin.create({
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       password: 'securepassword',
//     });

//     console.log('Admin created:', newAdmin.toJSON());
//   } catch (error) {
//     console.error('Error inserting admin data:', error.message);
//   }
// }

// // Call the function to insert data
// insertAdminData();
