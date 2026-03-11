const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("N3 Express Lab Running!");
});

app.get('/hello', (req, res) => {
    res.send("Hello from Express!");
});

app.get('/search', (req, res) => {
    const name = req.query.name || "No name provided";
    res.send("Search value: " + name);
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});