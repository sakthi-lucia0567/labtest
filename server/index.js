import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql2 from "mysql2";
// import { authRouter } from "./src/routes/auth.js";
// import { recipesRouter } from "./src/routes/recipe.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//ROUTES//
app.get("/", (req, res) => {
  res.send("Api Running Successfully :)");
});

// app.use("/auth", authRouter);
// app.use("/recipe", recipesRouter);

const PORT = process.env.PORT || 8001;

const connection = mysql2.createConnection(process.env.MYSQL_URL);

connection.connect((error) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    connection.query("SELECT * FROM world.city LIMIT 10", (error, results) => {
      if (error) {
        console.error(`Error: ${error}`);
      } else {
        console.log(results);
      }
    });
  }
});
