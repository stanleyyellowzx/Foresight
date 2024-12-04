// let array = ["1", "2", "3"];
// console.log(array);

// let modified = array.map(item => {
//     return "Hello : " + item;
// });

// console.log(modified);
// console.log(modified.join(", "));


// let string = "hElLO";

// let newString = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
// console.log(newString);

/* This file is for fetching Pokemon abilities data from PokeAPI using JavaScript */

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
    temp = await fetchResource(pokedex.pokemon_entries[2].pokemon_species.url);
    //console.log(temp.varieties);
    temp2 = await fetchResource(temp.varieties[2].pokemon.url);
    //console.log(temp2);
    console.log(temp2.moves)
    //await retrievePokemonData();
}

async function retrievePokemonData(){
    let temp, temp2;
    let pokemonList = [];
    for (const pokemon of pokedex.pokemon_entries){
        temp = await fetchResource(pokemon.pokemon_species.url);
        for (const varieties of temp.varieties){
            temp2 = await fetchResource(varieties.pokemon.url);
            for (const abilities of temp2.abilities){
                let tempPokemon = {
                    dex_num: 0,
                    name: '',
                    ability_name: ''
                }
                tempPokemon["dex_num"] = pokemon.entry_number;
                tempPokemon["name"] = format(temp2.name);
                tempPokemon["ability_name"] = format(abilities.ability.name);
                if (!pokemonList.find(currPokemon => JSON.stringify(currPokemon) === JSON.stringify(tempPokemon))){
                    pokemonList.push(tempPokemon);
                }
            }
        }
    }
    writePokemonToFile(pokemonList);
}

function writePokemonToFile(pokemonList){
    const writeStream = fs.createWriteStream('datatextfiles/pokemonabilities.txt');
    for (const pokemon of pokemonList){
        writeStream.write(`INSERT INTO pokemon_abilities (dex_num, pokemon_name, ability_name) VALUES (${pokemon.dex_num}, '${pokemon.name}', '${pokemon.ability_name}');\n`);
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

