import express from "express";

import {
  userLogin,
  userRegister,
  adminLogin,
  employeeLogin,
  employeeRegister,
} from "../controller/auth.js";

const router = express.Router();

router.post("/userRegister", userRegister);
router.post("/userLogin", userLogin);
router.post("/adminLogin", adminLogin);
router.post("/employeeLogin", employeeLogin);
router.post("/employeeRegister", employeeRegister);

export { router as authRouter };
