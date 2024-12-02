const express = require("express");
const app = express();
const path = require("path");
const Database = require("better-sqlite3");
const db = new Database("guzzlord.db", {verbose: console.log});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/search", (req, res) => {
    const type = req.body.search;
    console.log(type);
    const searchQuery = db.prepare(`SELECT * FROM pokemon_types WHERE type_name = '${type}';`).all();

    res.json(searchQuery);
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});