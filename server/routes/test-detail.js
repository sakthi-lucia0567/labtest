import express from "express";
import {
  getAllTestDetails,
  createTestDetail,
  updateTestDetail,
  deleteTestDetail,
} from "../controller/test-detail.js";

const router = express.Router();

// Get all test details
router.get("/test-details", getAllTestDetails);

// Create a new test detail
router.post("/test-details", createTestDetail);

// Update a test detail by test_id
router.put("/test-details/:test_id", updateTestDetail);

// Delete a test detail by test_id
router.delete("/test-details/:test_id", deleteTestDetail);

export { router as testDetailRouter };
