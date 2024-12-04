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
    const pokemonAbilityNames = db.prepare(`SELECT ability_name from pokemon_abilities where pokemon_name = '${name}'`).all();
    let pokemonMoves = [];
    let pokemonAbilities = [];
    for (const move of pokemonMoveNames){
        pokemonMoves.push(db.prepare(`SELECT * from moves where move_name = ?`).get(move.move_name));
    }
    for (const ability of pokemonAbilityNames){
        pokemonAbilities.push(db.prepare(`SELECT * from abilities where ability_name = ?`).get(ability.ability_name));
    }
    p.types = types;
    p.pokemonInfo = pokemonInfo;
    p.pokemonMoves = pokemonMoves;
    p.pokemonAbilities = pokemonAbilities;
    return p;
}

function searchAbility(abilityName){
    let p = {};
    const abilityInfo = db.prepare(`SELECT * from abilities where ability_name = '${abilityName}';`).all();
    const pokemonWithAbility = db.prepare(`SELECT pokemon_name from pokemon_abilities where ability_name = '${abilityName}';`).all();
    let pokemon = [];
    for (const name of pokemonWithAbility){
        let temp = {};
        temp.pokemonInfo = db.prepare(`SELECT * from pokemon where pokemon_name = ?`).get(name.pokemon_name);
        temp.type = db.prepare(`SELECT STRING_AGG(type_name, '/' ORDER BY rowid) AS types from pokemon_types where pokemon_name = ? group by dex_num, pokemon_name;`).get(name.pokemon_name);
        pokemon.push(temp);
    }
    p.abilityInfo = abilityInfo;
    p.pokemon = pokemon;
    return p;
}

function searchMove(moveName){
    let p = {};
    const moveInfo = db.prepare(`SELECT * from moves where move_name = '${moveName}';`).all();
    const pokemonWithMove = db.prepare(`SELECT pokemon_name from moves_list where move_name = '${moveName}';`).all();
    let pokemon = [];
    for (const name of pokemonWithMove){
        let temp = {};
        temp.pokemonInfo = db.prepare(`SELECT * from pokemon where pokemon_name = ?`).get(name.pokemon_name);
        temp.type = db.prepare(`SELECT STRING_AGG(type_name, '/' ORDER BY rowid) AS types from pokemon_types where pokemon_name = ? group by dex_num, pokemon_name;`).get(name.pokemon_name);
        pokemon.push(temp);
    }
    p.moveInfo = moveInfo;
    p.pokemon = pokemon;
    console.log(p.moveInfo);
    return p;
}

module.exports = { searchByType, searchByName, searchAbility, searchMove };