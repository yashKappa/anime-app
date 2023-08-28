const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 8000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ads"
});

connection.connect(function(error) {
    if (error) {
        console.error("Error connecting to the database: ", error);
    } else {
        console.log("Connected to the database successfully");
    }
});
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/login", function(req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.post("/student", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const query = "SELECT * FROM student WHERE username = ? AND password = ?";
    connection.query(query, [username, password], function(error, results) {
        if (error) {
            console.error("Error occurred during login:", error);
            res.redirect("/");
        } else if (results.length > 0) {
            res.redirect("/index.html");
        } else {
            res.redirect("/login");
        }
    });
});

app.get("/index", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
