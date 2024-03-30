import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDatabase from "./config/db.js";

console.log(process.env.MONGO_URI);
// Routes

// Connect to database
connectDatabase();
const app = express();

app.use(
    express.json({
        verify: (req, res, buf) => {
            req.rawBody = buf.toString();
        },
        limit: "50mb",
    })
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
