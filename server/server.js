const express = require("express");
const app = express();
const path = require("path");
const templates = require("./templates.js");
const pokedb = require("./database.js");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/", (req, res) => {
    const type = req.body.search;
    const searchQuery = pokedb.searchByType(type);

    const page = templates.searchByTypeHTML(searchQuery);
    res.send(page);
});

app.post("/add", (req, res) => {
    const test = req.body.add;
    console.log(test);
    res.send("ADDED");
})

app.listen(8000, () => {
    console.log("Listening on port 8000");
});