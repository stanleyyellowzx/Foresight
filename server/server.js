const express = require("express");
const app = express();
const path = require("path");
const templates = require("./templates.js");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/searchbytype", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "searchbytype.html"));
});

app.post("/searchbytype", async (req, res) => {
    const type = req.body.search;
    let searchQuery;

    try{
        const response = await fetch(`http://localhost:8001/searchbytype/${type}`)

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        console.log("FETCH COMPLETED");

        searchQuery = await response.json();
    }
    catch(error){
        console.error(error);
    }

    const page = templates.searchByTypeHTML(searchQuery, type);
    res.send(page);
});

app.post("/add", (req, res) => {
    const test = req.body.add;
    res.send("ADDED");
});

app.get("/pokemon", async (req, res) => {
    if (req.url.includes("?")){
        const pokemonName = req.url.split("?")[1].replaceAll("%20", " ");
        let searchQuery;
        
        try{
        const response = await fetch(`http://localhost:8001/pokemon/${pokemonName}`)

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        console.log("FETCH COMPLETED");

        searchQuery = await response.json();
        }
        catch(error){
            console.error(error);
        }
        const page = templates.searchByNameHTML(searchQuery, "");
        res.send(page);
    }
    else{
        res.sendFile(path.join(__dirname, "public", "pokemon.html"));
    }
});

app.post("/pokemon", async (req, res) => {
    const pokemonName = req.body.search;
    let searchQuery;
    try{
        const response = await fetch(`http://localhost:8001/pokemon/${pokemonName}`)

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        console.log("FETCH COMPLETED");

        searchQuery = await response.json();
    }
    catch(error){
        console.error(error);
    }
    const page = templates.searchByNameHTML(searchQuery, pokemonName);
    res.send(page);
});

app.get("/ability", async (req, res) => {
    if (req.url.includes("?")){
        const abilityName = req.url.split("?")[1].replaceAll("%20", " ");
        let searchQuery;
        try{
            const response = await fetch(`http://localhost:8001/ability/${abilityName}`)

            if (!response.ok){
                throw new Error("Could not fetch resource");
            }

            console.log("FETCH COMPLETED");

            searchQuery = await response.json();
        }
        catch(error){
            console.error(error);
        }
        const page = templates.searchAbilityHTML(searchQuery, "");
        res.send(page);
    }
    else{
        res.sendFile(path.join(__dirname, "public", "abilities.html"));
    }
});

app.post("/ability", async (req, res) => {
    const abilityName = req.body.search;
    try{
        const response = await fetch(`http://localhost:8001/ability/${abilityName}`)

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        console.log("FETCH COMPLETED");

        searchQuery = await response.json();
        }
    catch(error){
        console.error(error);
    }
    const page = templates.searchAbilityHTML(searchQuery, abilityName);
    res.send(page);
})

app.get("/move", async (req, res) => {
    if (req.url.includes("?")){
        const moveName = req.url.split("?")[1].replaceAll("%20", " ");
        let searchQuery;
        try{
            const response = await fetch(`http://localhost:8001/move/${moveName}`)

            if (!response.ok){
                throw new Error("Could not fetch resource");
            }

            console.log("FETCH COMPLETED");

            searchQuery = await response.json();
        }
        catch(error){
            console.error(error);
        }
        const page = templates.searchMoveHTML(searchQuery, "");
        res.send(page);
    }
    else{
        res.sendFile(path.join(__dirname, "public", "moves.html"));
    }
});

app.post("/move", async (req, res) => {
    const moveName = req.body.search;
    let searchQuery;
    try{
        const response = await fetch(`http://localhost:8001/move/${moveName}`)

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        console.log("FETCH COMPLETED");

        searchQuery = await response.json();
        }
    catch(error){
        console.error(error);
    }
    const page = templates.searchMoveHTML(searchQuery, moveName);
    res.send(page);
});

app.get("/typematchups", async (req, res) => {
    if (req.url.includes("?")){
        const type = req.url.split("?")[1].replaceAll("%20", " ");
        let searchQuery;
        try{
            const response = await fetch(`http://localhost:8001/typematchups/${type}`)

            if (!response.ok){
                throw new Error("Could not fetch resource");
            }

            console.log("FETCH COMPLETED");

            searchQuery = await response.json();
        }
        catch(error){
            console.error(error);
        }
        const page = templates.typeMatchupsHTML(searchQuery, "");
        res.send(page);
    }
    else{
        res.sendFile(path.join(__dirname, "public", "typematchups.html"));
    }
});

app.post("/typematchups", async (req, res) => {
    const type = req.body.search;
    let searchQuery;
    try{
            const response = await fetch(`http://localhost:8001/typematchups/${type}`)

            if (!response.ok){
                throw new Error("Could not fetch resource");
            }

            console.log("FETCH COMPLETED");

            searchQuery = await response.json();
        }
        catch(error){
            console.error(error);
        }
    const page = templates.typeMatchupsHTML(searchQuery, type);
    res.send(page);
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});