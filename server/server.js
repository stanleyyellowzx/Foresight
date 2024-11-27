const express = require("express");
const app = express();
const path = require("path");

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/search", (req, res) => {
    const searchQuery = req.body.search;

    // Simulate search results (replace with actual search logic)
    const results = searchQuery
        ? [`Result for "${searchQuery}"`, "Another result", "More results..."]
        : ["No search query provided."];

    // Return the results as JSON
    res.json({ results });
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});