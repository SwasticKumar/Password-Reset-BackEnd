import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dataBaseConnection } from "./database/dbConfig.js";
import { userSignup } from "./routes/userSignup.js";
import { userLogin } from "./routes/userLogin.js";
import { forgotPassword } from "./routes/forgotPassword.js";
import { resetPassword } from "./routes/resetPassword.js";
import { verifyRandomString } from "./routes/verifyRandomString.js";

//Configuring the environmental variable
dotenv.config();

//Server Setup
const app = express();
const PORT = process.env.PORT;

//Middlewares
app.use(express.json());
app.use(cors());

//Database Connection
dataBaseConnection();

//Routes
app.use("/api/user/resetPassword", resetPassword);
app.use("/api/user/verifyRandomString", verifyRandomString);
app.use("/api/user/forgotPassword", forgotPassword);
app.use("/api/user/login", userLogin);
app.use("/api/user/signup", userSignup);

//Listening the Server
app.listen(PORT, () => {
  console.log(`Server Started in localhost:${PORT}`);
});
