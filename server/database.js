const Database = require("better-sqlite3");
const db = new Database("guzzlord.db", {verbose: console.log});

function searchByType(type){
    let p = {};
    if (type === ""){
        const types = db.prepare(`SELECT dex_num, pokemon_name, STRING_AGG(type_name, '/' ORDER BY rowid) AS types from pokemon_types group by dex_num, pokemon_name;`).all();
        const stat = db.prepare(`SELECT * from pokemon;`).all();
        p.types = types;
        p.stat = stat;
        return p;
    }
    const types = db.prepare(`SELECT dex_num, pokemon_name, STRING_AGG(type_name, '/' ORDER BY rowid) AS types from pokemon_types where (dex_num, pokemon_name) in (select dex_num, pokemon_name from pokemon_types where type_name = '${type}') group by dex_num, pokemon_name;`).all();
    const stat = db.prepare(`SELECT * from pokemon where pokemon.pokemon_name in (select pokemon_name from pokemon_types where type_name = '${type}');`).all();
    p.types = types;
    p.stat = stat;
    return p;
}

module.exports = { searchByType }