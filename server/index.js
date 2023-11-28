import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql2 from "mysql2";
import sequelize from "./config/database.js";
import { authRouter } from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.get("/", (req, res) => {
  res.send("Api Running Successfully :)");
});

app.use("/auth", authRouter);

const PORT = process.env.PORT || 8001;

// Synchronize models with the database
sequelize.sync({ force: false }).then(() => {
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

// import passport from "passport";
// import session from "express-session";

// import { initializePassport } from "./middleware/passport-config.js";
// initializePassport(
//   passport,
//   (email) => user.find((user) => user.email == email),
//   (id) => id.find((user) => user.id == id)
// );

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
//Authentication

// app.post(
//   "/login",
//   checkNotAuthenticated,
//   passport.authenticate("local", {
//     successRedirect: "/", // Redirect to dashboard on successful login
//     failureRedirect: "/login", // Redirect to login page on failed login
//   })
// );

// app.delete("/logout", (req, res) => {
//   req.logOut();
//   res.redirect("/login");
// });

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// }
// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect("/");
//   }
//   next();
// }
