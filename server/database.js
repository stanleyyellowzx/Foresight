const Database = require("better-sqlite3");
const db = new Database("guzzlord.db", {verbose: console.log});

/* NOTE: Using the GROUP BY statement with STRING_AGG() causes no values to be returned. If you use STRING_AGG() without GROUP BY, then no rows are calculated, but a NULL row is returned to indicate that there are no values */

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
    console.log(p);
    return p;
}

function searchByName(name){
    let p = {};
    const types = db.prepare(`SELECT STRING_AGG(type_name, '/' ORDER BY rowid) AS types from pokemon_types where pokemon_name = '${name}' group by dex_num, pokemon_name;`).all();
    const pokemonInfo = db.prepare(`SELECT * from pokemon where pokemon_name = '${name}';`).all();
    const pokemonMoveNames = db.prepare(`SELECT move_name from moves_list where pokemon_name = '${name}'`).all();
    let pokemonMoves = []
    for (const move of pokemonMoveNames){
        pokemonMoves.push(db.prepare(`SELECT * from moves where move_name = ?`).get(move.move_name));
    }
    p.types = types;
    p.pokemonInfo = pokemonInfo;
    p.pokemonMoves = pokemonMoves;
    return p;
}

module.exports = { searchByType, searchByName }