import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "*",
        optionsSuccessStatus: 200,
    })
);
app.set("trust proxy", true);

app.use(
    urlencoded({
        extended: false,
    })
);
app.use(json());


const start = async () => {
    try {
    } catch (err) {
        throw new Error("database error!");
    }

    app.listen(8080, () => console.log("server is up and running on port 8080"));
};

start();