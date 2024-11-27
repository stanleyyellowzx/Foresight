/* This file is for fetching Pokemon data from PokeAPI using JavaScript */

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

//note: varieties from a Pokemon Species type will allow you to get all of the URLs of the different forms of pokemon
//for example, the pokedex number only has base form Palafin, but there is also an entry for Palafin hero
async function main(){
    await fetchPokedex();
    await retrievePokemonData();
}

async function retrievePokemonData(){
    let temp, temp2;
    let pokemonList = [];
    for (const pokemon of pokedex.pokemon_entries){
        temp = await fetchResource(pokemon.pokemon_species.url);
        for (const varieties of temp.varieties){
            let tempPokemon = {
                dex_num: 0,
                name: '',
                hp: 0,
                attack: 0,
                special_attack: 0,
                defense: 0,
                special_defense: 0,
                speed: 0
            }
            temp2 = await fetchResource(varieties.pokemon.url);
            tempPokemon["dex_num"] = pokemon.entry_number;
            tempPokemon["name"] = format(temp2.name);
            for (let i = 0; i < temp2.stats.length; i++){
                tempPokemon[temp2.stats[i].stat.name.replaceAll("-", "_")] = temp2.stats[i].base_stat;
            }
            pokemonList.push(tempPokemon);
        }
    }
    writePokemonToFile(pokemonList);
}

function writePokemonToFile(pokemonList){
    const writeStream = fs.createWriteStream('./datatextfiles/pokemon.txt');
    for (const pokemon of pokemonList){
        writeStream.write(`INSERT INTO pokemon (dex_num, pokemon_name, pokemon_hp, pokemon_attack, pokemon_special_attack, pokemon_defense, pokemon_special_defense, pokemon_speed) VALUES (${pokemon.dex_num}, '${pokemon.name}', ${pokemon.hp}, ${pokemon.attack}, ${pokemon.special_attack}, ${pokemon.defense}, ${pokemon.special_defense}, ${pokemon.speed});\n`);
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
