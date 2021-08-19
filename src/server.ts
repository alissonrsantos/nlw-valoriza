import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("Server is running!")
});

app.get("/", (request, response) => {
    return response.send("Primeira rota GET")
});

app.post("/test", (request, response) => {
    response.send("Segunda rota POST!")
});