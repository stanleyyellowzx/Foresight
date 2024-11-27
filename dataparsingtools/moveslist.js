/* This file is for fetching Pokemon moves data from PokeAPI using JavaScript */

let pokedex;
const fs = require('node:fs');

async function fetchPokedex(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokedex/1/");

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        pokedex = await response.json();
    }
    catch(error){
        console.error(error);
    }
}

async function fetchResource(url){
    try{
        const response = await fetch(url);

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        return data;
    }
    catch(error){
        console.error(error);
    }
}

async function main(){
    await fetchPokedex();
    // temp = await fetchResource(pokedex.pokemon_entries[0].pokemon_species.url);
    // temp2 = await fetchResource(temp.varieties[0].pokemon.url);
    // console.log(temp2.moves);
    await retrievePokemonData();
}

async function retrievePokemonData(){
    let temp, temp2;
    let pokemonList = [];
    for (const pokemon of pokedex.pokemon_entries){
        temp = await fetchResource(pokemon.pokemon_species.url);
        for (const varieties of temp.varieties){
            temp2 = await fetchResource(varieties.pokemon.url);
            for (const moves of temp2.moves){
                let tempPokemon = {
                    dex_num: 0,
                    name: '',
                    move_name: ''
                }
                tempPokemon["dex_num"] = pokemon.entry_number;
                tempPokemon["name"] = format(temp2.name);
                tempPokemon["move_name"] = format(moves.move.name);
                // this was checking for duplicates, but it is unnecessary, I tested the fact
                // checking also caused the program to run for like an hour, while no check only took like 3 minutes
                // if (!pokemonList.find(currPokemon => JSON.stringify(currPokemon) === JSON.stringify(tempPokemon))){
                //     pokemonList.push(tempPokemon);
                // }
                pokemonList.push(tempPokemon);
            }
        }
    }
    writePokemonToFile(pokemonList);
}

function writePokemonToFile(pokemonList){
    const writeStream = fs.createWriteStream('./datatextfiles/pokemonmoves.txt');
    for (const pokemon of pokemonList){
        writeStream.write(`INSERT INTO moves_list (dex_num, pokemon_name, move_name) VALUES (${pokemon.dex_num}, '${pokemon.name}', '${pokemon.move_name}');\n`);
    }
    writeStream.end();
}

function format(string){
    return string
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

main()
