import express from 'express'
import apiRouter from './routes/index.js'
import dotenv from "dotenv";
import cors from "cors";
import crypto from 'crypto'
dotenv.config();

const app = express();
 app.use(cors({
    origin:'http://localhost:3000',
    optionsSuccessStatus200:"*",
    credentials:true
 }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/api", apiRouter);


app.listen(5000, () => {
  console.log(`Server is running on port:5000`);
});
