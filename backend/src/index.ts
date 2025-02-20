import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"

import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());  //parsing the json data

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

try {
    app.listen(5000, ()=> {
        console.log("Server is running on port 5000")
    });
} catch (error) {
    console.error("Error starting server: ", error);
}
