import testDetails from "../models/TestDetail.js"; // Assuming you have a testDetails model

// Get all test details
export const getAllTestDetails = async (req, res) => {
  try {
    const allTestDetails = await testDetails.findAll();
    res.status(200).json({ testDetails: allTestDetails });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};

// Create a new test detail
export const createTestDetail = async (req, res) => {
  try {
    const {
      test_no,
      test_detail,
      price,
      test_description,
      test_interpretation,
    } = req.body;

    const newTestDetail = await testDetails.create({
      test_no,
      test_detail,
      price,
      test_description,
      test_interpretation,
    });

    res.status(201).json({
      test_id: newTestDetail.test_id,
      message: "Test detail created successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};

// Update a test detail by test_id
export const updateTestDetail = async (req, res) => {
  try {
    const { test_id } = req.params;
    const updatedTestDetail = req.body;

    const [updatedRows] = await testDetails.update(updatedTestDetail, {
      where: { test_id },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Test detail not found" });
    }

    res.status(200).json({ message: "Test detail updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};

// Delete a test detail by test_id
export const deleteTestDetail = async (req, res) => {
  try {
    const { test_id } = req.params;
    const deletedRows = await testDetails.destroy({
      where: { test_id },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: "Test detail not found" });
    }

    res.status(200).json({ message: "Test detail deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};
