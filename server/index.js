import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql2 from "mysql2";
import sequelize from "./config/database.js";
import passport from "passport";
import session from "express-session";

import { initializePassport } from "./middleware/passport-config.js";
initializePassport(passport, (email) =>
  user.find((user) => user.email == email)
);

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//ROUTES//
app.get("/", (req, res) => {
  res.send("Api Running Successfully :)");
});

const PORT = process.env.PORT || 8001;

// Synchronize models with the database
sequelize.sync().then(() => {
  console.log("Database synced");
});

const connection = mysql2.createConnection(process.env.MYSQL_URL);

connection.connect((error) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
});
