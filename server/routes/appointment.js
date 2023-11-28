import express from "express";

import {
  getAllAppointments,
  createAppointment,
  deleteAppointmentByUser,
  getAppointmentsByUser,
  updateAppointmentByUser,
} from "../controller/appointment.js";

const router = express.Router();
// Get all appointments
router.get("/appointments", getAllAppointments);

// Create a new appointment
router.post("/appointments", createAppointment);

// Delete an appointment by user
router.delete("/appointments/:appointmentId", deleteAppointmentByUser);

// Get appointments by user
router.get("/appointments/user/:userId", getAppointmentsByUser);

// Update an appointment by user
router.put("/appointments/:appointmentId", updateAppointmentByUser);

export { router as appointmentRouter };
