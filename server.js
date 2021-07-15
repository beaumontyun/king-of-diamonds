require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken")
const cors = require("cors");
const app = express();
const port = 3000;

// browser has security feature in place that prevents app from accessing URL that do not match the current URL. 
// Cors allows server to access it so that we may communicate with another localhost URL for login purpose.
app.use(cors())
app.use(express.json());

app.get("/profile", (req, res) => {
    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");
    try {
        jwt.verify(token, process.env.JWT_KEY)
        res.json({
            message: 'yo',
        })
    } catch (err) {
        res.status(401)
        res.json({
            error: err,
        });
    }
});

app.post("/login", (req, res) => {
    const USERNAME = 'cody';
    const PASSWORD = '123456';

    const { username, password } = req.body;

    if (username === USERNAME && password === PASSWORD) {
        // Good to go 200
        const user = {
            id: 1,
            name: 'cody',
            username: 'cody',
        };
        const token = jwt.sign({}, process.env.JWT_KEY);
        res.json({
            token,
            user,
        });
    } else {
        res.status(403);
        res.json({ message: "Invalid login information" })
    }
})

app.listen(port, () => {
    console.log(`Example app listing on http://localhost:${port}`)
})
