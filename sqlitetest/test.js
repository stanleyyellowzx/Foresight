const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./sqlitetest/guzzlord.db");

let test = db.all("SELECT * FROM pokemon WHERE pokemon_attack > 150", (err, row) => {
    if (err){
        console.error("ERROR");
    }else if (row){
        console.log(row);
    }
    else{
        console.log("No result found");
    }
});


db.close()