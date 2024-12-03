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

app.get("/searchbytype", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "searchbytype.html"));
});

app.post("/searchbytype", (req, res) => {
    const type = req.body.search;
    const filteredType = formatString(type);
    const searchQuery = pokedb.searchByType(filteredType);
    console.log(searchQuery);

    const page = templates.searchByTypeHTML(searchQuery, type);
    res.send(page);
});

app.post("/add", (req, res) => {
    const test = req.body.add;
    console.log(test);
    res.send("ADDED");
});

app.get("/pokemon", (req, res) => {
    if (req.url.includes("?")){
        const pokemonName = req.url.split("?")[1].replaceAll("%20", " ");
        const filteredName = formatString(pokemonName);
        const searchQuery = pokedb.searchByName(filteredName);

        const page = templates.searchByNameHTML(searchQuery);
        res.send(page);
    }
    else{
        res.sendFile(path.join(__dirname, "public", "pokemon.html"));
    }
});

app.post("/pokemon", (req, res) => {
    const pokemonName = req.body.search;
    const filteredName = formatString(pokemonName);
    const searchQuery = pokedb.searchByName(filteredName);
    const page = templates.searchByNameHTML(searchQuery, pokemonName);
    res.send(page);
})

app.listen(8000, () => {
    console.log("Listening on port 8000");
});

function formatString(string){
    return string.split(" ").map(word => string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()).join(" ");
}