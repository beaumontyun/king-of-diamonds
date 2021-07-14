require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.use (express.json());

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`Example app listing on http://localhost:${port}`)
})
