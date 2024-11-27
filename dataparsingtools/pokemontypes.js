/* This file is for fetching Pokemon types data from PokeAPI using JavaScript */

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
    // temp = await fetchResource(pokedex.pokemon_entries[3].pokemon_species.url);
    // temp2 = await fetchResource(temp.varieties[0].pokemon.url);
    // console.log(temp2.name);
    // console.log(temp2.types[0].type.name);
    await retrievePokemonData();
}

async function retrievePokemonData(){
    let temp, temp2;
    let pokemonList = [];
    for (const pokemon of pokedex.pokemon_entries){
        temp = await fetchResource(pokemon.pokemon_species.url);
        for (const varieties of temp.varieties){
            temp2 = await fetchResource(varieties.pokemon.url);
            for (const types of temp2.types){
                let tempPokemon = {
                    dex_num: 0,
                    name: '',
                    type: ''
                }
                tempPokemon["dex_num"] = pokemon.entry_number;
                tempPokemon["name"] = format(temp2.name);
                tempPokemon["type"] = format(types.type.name);
                pokemonList.push(tempPokemon);
            }
        }
    }
    writePokemonToFile(pokemonList);
}

function writePokemonToFile(pokemonList){
    const writeStream = fs.createWriteStream('./datatextfiles/pokemontypes.txt');
    for (const pokemon of pokemonList){
        writeStream.write(`INSERT INTO pokemon_types(dex_num, pokemon_name, type_name) VALUES (${pokemon.dex_num}, '${pokemon.name}', '${pokemon.type}');\n`);
    }
    writeStream.end();
}

function format(string){
    return string
    .split('-') // Split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // format each word
    .join(' '); // Join the words back into a single string
}

main()
