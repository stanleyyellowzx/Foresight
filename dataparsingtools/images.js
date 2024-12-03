/* This file is for fetching Pokemon types data from PokeAPI using JavaScript */

let pokedex;
const fs = require('node:fs');
const https = require("https");
const path = require("path");
const Axios = require("axios");

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
    await retrievePokemonData();
}

async function retrievePokemonData(){
    let temp, temp2;
    let pokemonList = [];
    for (const pokemon of pokedex.pokemon_entries){
        temp = await fetchResource(pokemon.pokemon_species.url);
        for (const varieties of temp.varieties){
            temp2 = await fetchResource(varieties.pokemon.url);
            await downloadImage(temp2.sprites.front_default, path.join(__dirname, `test-directory/${temp2.name.replaceAll("-", " ")}.png`));
        }
    }
}

async function downloadImage(url, outputPath){
    try{
        const response = await Axios({method: "get", url: url, responseType: "stream"});

    response.data.pipe(fs.createWriteStream(outputPath));

    return new Promise((resolve, reject) => {
        response.data.on('end', () => {
            resolve();
        });

        response.data.on('error', err => {
            reject(err);
        });
    });
    }catch{
        console.log("download failed");
    }
}

main()