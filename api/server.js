const express = require("express");
const app = express();
const path = require("path");
const pokedb = require("./database.js");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/searchbytype/:type', (req, res) => {
    let type = formatString(req.params.type);
    const searchQuery = pokedb.searchByType(type);
    console.log(searchQuery);
    res.json(searchQuery);
})

app.get('/pokemon/:name', (req, res) => {
    let name = formatString(req.params.name);
    const searchQuery = pokedb.searchByName(name);
    res.json(searchQuery);
})

app.get('/ability/:name', (req, res) => {
    let name = formatString(req.params.name);
    const searchQuery = pokedb.searchAbility(name);
    res.json(searchQuery);
})

app.get('/move/:name', (req, res) => {
    let name = formatString(req.params.name);
    const searchQuery = pokedb.searchMove(name);
    res.json(searchQuery);
})

app.get('/typematchups/:type', (req, res) => {
    let type = formatString(req.params.type);
    const searchQuery = pokedb.typeMatchups(type);
    res.json(searchQuery);
})

app.listen(8001, () => {
    console.log("listening on port 8001");
})

function formatString(string){
    const splitArray = string.split(" ");
    const capitalizedArray = splitArray.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedArray.join(" ");
}