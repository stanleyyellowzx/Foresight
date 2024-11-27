const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./public/chill.db")
const path = require("path");

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static("./public"))

app.post("/types", async (req, res) => {
    const typeName = req.body.search;

    // try {
    //     const rows = await findTypes(typeName); // Query the database
    //     res.json(rows); // Send the rows as the response
    // } catch (err) {
    //     console.error("Error fetching types:", err);
    //     res.status(500).send({ error: err }); // Send an error response
    // }
    res.sendFile(path.join(__dirname, "public", "oshawott.png"));
});

app.get("/api", (req, res) => {
    res.json({"fruits" : ["apple", "strawberry", "banana"]})
});

function findTypes(typeName){
    return new Promise((resolve, reject) => {
        // Use parameterized query to prevent SQL injection
        db.all(`SELECT * FROM pokemon_types WHERE type_name = ?`, [typeName], (err, rows) => {
            if (err) {
                reject("ERROR OCCURRED: " + err.message); // Reject on error
            } else if (rows && rows.length > 0) {
                resolve(rows); // Resolve with the rows if data is found
            } else {
                reject("No matching rows found."); // Reject if no data matches
            }
        });
    });
}

app.listen(8000, () => {
    console.log("Server started on port 8000")
});