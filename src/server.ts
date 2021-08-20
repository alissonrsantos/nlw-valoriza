import express from "express";
import { router } from "./Routes";
import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => {
    console.log("Server is running!")
});