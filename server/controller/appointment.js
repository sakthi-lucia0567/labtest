import Appointment from "../models/Appointment.js";

// import { User } from "./models"; // Import the User model
// import { DataTypes } from "sequelize";

export const getAllAppointments = async (req, res) => {
  try {
    // Retrieve all appointments from the database
    const allAppointments = await Appointment.findAll();

    res.status(200).json({ appointments: allAppointments });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};

export const createAppointment = async (req, res) => {
  try {
    const {
      patient_name,
      gender,
      dob,
      mobile_number,
      email,
      appointment_date,
      appointment_time,
      test_type,
      remark,
      status,
    } = req.body;

    // Get the user ID from the authenticated user (assuming you use middleware like Passport to attach user information)
    const userId = req.user.user_id;

    // Generate a unique 6-digit number
    let uniqueAppointmentNumber;
    let isUnique = false;
    while (!isUnique) {
      const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);
      uniqueAppointmentNumber = randomSixDigitNumber.toString();
      const existingAppointment = await Appointment.findOne({
        where: { appointment_number: uniqueAppointmentNumber },
      });
      isUnique = !existingAppointment;
    }

    // Create the appointment with the unique number and associate it with the user
    const appointment = await Appointment.create({
      appointment_number: uniqueAppointmentNumber,
      patient_name,
      gender,
      dob,
      mobile_number,
      email,
      appointment_date,
      appointment_time,
      test_type,
      remark,
      status,
      user_id: userId, // Associate the appointment with the user
    });

    res.status(201).json({
      appointment_id: appointment.appointment_number,
      message: "Appointment created successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};

// Get all appointments by user_id
export const getAppointmentsByUser = async (req, res) => {
  try {
    const { user_id } = req.params; // get the user_id from the request parameters
    const appointments = await Appointment.findAll({
      where: { user_id }, // filter the appointments by user_id
    });
    res.status(200).json({ appointments });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};

// Update an appointment by user_id and appointment_id
export const updateAppointmentByUser = async (req, res) => {
  try {
    const { user_id, appointment_id } = req.params; // get the user_id and appointment_id from the request parameters
    const updatedAppointment = req.body; // get the updated appointment data from the request body
    const [updatedRows] = await Appointment.update(updatedAppointment, {
      where: { user_id, appointment_id }, // filter the appointment by user_id and appointment_id
    });
    if (updatedRows === 0) {
      // if no rows were updated, send a not found error
      return res
        .status(404)
        .json({ message: "Appointment not found or not owned by user" });
    }
    // if the update was successful, send a success message
    res.status(200).json({ message: "Appointment updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};

// Delete an appointment by user_id and appointment_id
export const deleteAppointmentByUser = async (req, res) => {
  try {
    const { user_id, appointment_id } = req.params; // get the user_id and appointment_id from the request parameters
    const deletedRows = await Appointment.destroy({
      where: { user_id, appointment_id }, // filter the appointment by user_id and appointment_id
    });
    if (deletedRows === 0) {
      // if no rows were deleted, send a not found error
      return res
        .status(404)
        .json({ message: "Appointment not found or not owned by user" });
    }
    // if the delete was successful, send a success message
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};
