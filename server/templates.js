function searchByTypeHTML(searchQuery, type){
    let typesTable = searchQuery.types.map(pokemon => {
        const splitArray = pokemon.types.split("/");
        if (splitArray.length === 1){
            return `
            <tr>
            <td><a href="/pokemon?${pokemon.pokemon_name}" class="pokemon-name">${pokemon.pokemon_name}</a></td>
            <td><img src="images/types/${splitArray[0].toLowerCase()}.png" alt="" class="type-img"></td>
            <td><img src="images/pokemon-sprites/${pokemon.pokemon_name.toLowerCase()}.png" alt="" class="sprite-img"></td>
            `;
        }
        else{
            return `
            <tr>
            <td><a href="/pokemon?${pokemon.pokemon_name}" class="pokemon-name">${pokemon.pokemon_name}</a></td>
            <td><img src="images/types/${splitArray[0].toLowerCase()}.png" alt="" class="type-img"><img src="images/types/${splitArray[1].toLowerCase()}.png" alt="" class="type-img"></td>
            <td><img src="images/pokemon-sprites/${pokemon.pokemon_name.toLowerCase()}.png" alt="" class="sprite-img"></td>
            `;
        }
    });

    let statsTable = searchQuery.stat.map(pokemon => {
        return `
            <td>${pokemon.pokemon_hp}</td>
            <td>${pokemon.pokemon_attack}</td>
            <td>${pokemon.pokemon_special_attack}</td>
            <td>${pokemon.pokemon_defense}</td>
            <td>${pokemon.pokemon_special_defense}</td>
            <td>${pokemon.pokemon_speed}</td>
            <td><form action="/add" method="POST"><button type="submit" name="add" value="Name">Add</button></form></td>
        </tr>
        `
    })
    
    let tableHTML = typesTable.map((pokemon, index) => {
        return pokemon + statsTable[index];
    }).join("");

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Search By Types</title>
        <link rel="stylesheet" href="/css/searchbytype.css">
    </head>
    <body>
        <div id="search-container">
            <form action="/searchbytype" method="post">
                <input type="text" placeholder="Search" name="search" id="search-bar" value="${type}">
                <button type="submit" id="submit-button">Submit</button>
            </form>
        </div>
        <div id="homepage-container">
            <a href="/" id="homepage">Back to Home</a>
        </div>
        <h1>Pokémon List</h1>
        <table>
            <thead>
                <tr>
                    <th>Pokemon Name</th>
                    <th>Types</th>
                    <th>Image</th>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Special Attack</th>
                    <th>Defense</th>
                    <th>Special Defense</th>
                    <th>Speed</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                ${tableHTML}  <!-- Insert dynamically generated table rows here -->
            </tbody>
        </table>
    </body>
    </html>
    `;
}

function searchByNameHTML(searchQuery, pokemonName){

    let typesTable = searchQuery.types.map(pokemon => {
        const splitArray = pokemon.types.split("/");
        if (splitArray.length === 1){
            return `
            <td><img src="images/types/${splitArray[0].toLowerCase()}.png" alt="" class="type-img"></td>`;
        }
        else{
            return `
            <td><img src="images/types/${splitArray[0].toLowerCase()}.png" alt="" class="type-img"><img src="images/types/${splitArray[1].toLowerCase()}.png" alt="" class="type-img"></td>`;
        }
    });

    let pokemonTableData = searchQuery.pokemonInfo.map((pokemon, index) => {
        return `
        <tr>
            <td>${pokemon.pokemon_name}</td>
            ${typesTable[index]}
            <td><img src="images/pokemon-sprites/${pokemon.pokemon_name.toLowerCase()}.png" alt="" class="sprite-img"></td>
            <td>${pokemon.pokemon_hp}</td>
            <td>${pokemon.pokemon_attack}</td>
            <td>${pokemon.pokemon_special_attack}</td>
            <td>${pokemon.pokemon_defense}</td>
            <td>${pokemon.pokemon_special_defense}</td>
            <td>${pokemon.pokemon_speed}</td>
            <td><form action="/add" method="POST"><button type="submit" name="add" value="Name">Add</button></form></td>
        </tr>
        `
    }).join("");

    let abilityTable = searchQuery.pokemonAbilities.map(ability => {
        return `
        <tr>
        <td><a href="/ability?${ability.ability_name}" class="ability-name">${ability.ability_name}</a></td>
        <td>${ability.ability_effect}</td>
        </tr>
        `
    }).join("");

    let movesTable = searchQuery.pokemonMoves.map(move => {
        return `
        <tr>
            <td><a href="/move?${move.move_name}" class="move-name">${move.move_name}</a></td>
            <td><img src="images/types/${move.type_name.toLowerCase()}.png" alt="" class="type-img"></td>
            <td>${move.move_damage}</td>
            <td>${move.move_accuracy}</td>
            <td><img src="images/move-categories/${move.move_category.toLowerCase()}.png" alt="" class="category-img"></td>
            <td>${move.move_effect}</td>
        </tr>
        `
    }).join("");

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon Table</title>
    <link rel="stylesheet" href="/css/pokemon.css">
</head>
<body>
    <div id="search-container">
        <form action="/pokemon" method="post">
            <input type="text" placeholder="Search" name="search" id="search-bar" value="${pokemonName}">
            <button type="submit" id="submit-button">Submit</button>
        </form>
    </div>
    <div id="homepage-container">
        <a href="/" id="homepage">Back to Home</a>
    </div>
    <h1>Pokémon Info</h1>
    <table>
        <thead>
            <tr>
                <th>Pokemon Name</th>
                <th>Types</th>
                <th>Image</th>
                <th>HP</th>
                <th>Attack</th>
                <th>Special Attack</th>
                <th>Defense</th>
                <th>Special Defense</th>
                <th>Speed</th>
                <th>Add</th>
            </tr>
        </thead>
        <tbody>
            ${pokemonTableData}
        </tbody>
    </table>
    <h1>Abilities</h1>
    <table>
        <thead>
            <tr>
                <th>Ability Name</th>
                <th>Effect</th>
            </tr>
        </thead>
        <tbody>
            ${abilityTable}
        </tbody>
    </table>
    <h1>List of Moves</h1>
    <table>
        <thead>
            <tr>
                <th>Move Name</th>
                <th>Type</th>
                <th>Damage</th>
                <th>Accuracy</th>
                <th>Category</th>
                <th>Effect</th>
            </tr>
        </thead>
        <tbody>
            ${movesTable}
        </tbody>
    </table>
</body>
</html>`
}

function searchAbilityHTML(searchQuery, abilityName){
    let abilityTable = searchQuery.abilityInfo.map(ability => {
        return `
        <tr>
        <td>${ability.ability_name}</td>
        <td>${ability.ability_effect}</td>
        </tr>
        `
    }).join("");

    let pokemonTable = searchQuery.pokemon.map(pokemon => {
        const splitArray = pokemon.type.types.split("/");
        if (splitArray.length === 1){
            return `
            <tr>
            <td><a href="/pokemon?${pokemon.pokemonInfo.pokemon_name}" class="pokemon-name">${pokemon.pokemonInfo.pokemon_name}</a></td>
            <td><img src="images/types/${splitArray[0].toLowerCase()}.png" alt="" class="type-img"></td>
            <td><img src="images/pokemon-sprites/${pokemon.pokemonInfo.pokemon_name.toLowerCase()}.png" alt="" class="sprite-img"></td>
            <td>${pokemon.pokemonInfo.pokemon_hp}</td>
            <td>${pokemon.pokemonInfo.pokemon_attack}</td>
            <td>${pokemon.pokemonInfo.pokemon_special_attack}</td>
            <td>${pokemon.pokemonInfo.pokemon_defense}</td>
            <td>${pokemon.pokemonInfo.pokemon_special_defense}</td>
            <td>${pokemon.pokemonInfo.pokemon_speed}</td>
            <td><form action="/add" method="POST"><button type="submit" name="add" value="Name">Add</button></form></td>
            </tr>
            `
        }
        else{
            return `
            <tr>
            <td><a href="/pokemon?${pokemon.pokemonInfo.pokemon_name}" class="pokemon-name">${pokemon.pokemonInfo.pokemon_name}</a></td>
            <td><img src="images/types/${splitArray[0].toLowerCase()}.png" alt="" class="type-img"><img src="images/types/${splitArray[1].toLowerCase()}.png" alt="" class="type-img"></td>
            <td><img src="images/pokemon-sprites/${pokemon.pokemonInfo.pokemon_name.toLowerCase()}.png" alt="" class="sprite-img"></td>
            <td>${pokemon.pokemonInfo.pokemon_hp}</td>
            <td>${pokemon.pokemonInfo.pokemon_attack}</td>
            <td>${pokemon.pokemonInfo.pokemon_special_attack}</td>
            <td>${pokemon.pokemonInfo.pokemon_defense}</td>
            <td>${pokemon.pokemonInfo.pokemon_special_defense}</td>
            <td>${pokemon.pokemonInfo.pokemon_speed}</td>
            <td><form action="/add" method="POST"><button type="submit" name="add" value="Name">Add</button></form></td>
            </tr>
            `
        }
    }).join("");

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abilities</title>
    <link rel="stylesheet" href="css/abilities.css">
</head>
<body>
    <div id="search-container">
        <form action="/ability" method="post">
            <input type="text" placeholder="Search" name="search" id="search-bar" value="${abilityName}">
            <button type="submit" id="submit-button">Submit</button>
        </form>
    </div>
    <div id="homepage-container">
        <a href="/" id="homepage">Back to Home</a>
    </div>
    <h1>Ability Info</h1>
    <table>
        <thead>
            <tr>
                <th>Ability Name</th>
                <th>Effect</th>
            </tr>
        </thead>
        <tbody>
            ${abilityTable}
        </tbody>
    </table>
    <h1>Pokémon that can have this ability</h1>
    <table>
        <thead>
            <tr>
                <th>Pokemon Name</th>
                <th>Types</th>
                <th>Image</th>
                <th>HP</th>
                <th>Attack</th>
                <th>Special Attack</th>
                <th>Defense</th>
                <th>Special Defense</th>
                <th>Speed</th>
                <th>Add</th>
            </tr>
        </thead>
        <tbody>
            ${pokemonTable}
        </tbody>
    </table>
</body>
</html>`
}

function searchMoveHTML(searchQuery, moveName){
    let moveTable = searchQuery.moveInfo.map(move => {
        return `
        <tr>
        <td>${move.move_name}</td>
        <td><img src="images/types/${move.type_name.toLowerCase()}.png" alt="" class="type-img"></td>
        <td>${move.move_damage}</td>
        <td>${move.move_accuracy}</td>
        <td><img src="images/move-categories/${move.move_category.toLowerCase()}.png" alt="" class="category-img"></td>
        <td>${move.move_effect}</td>
        </tr>
        `
    }).join("");

    let pokemonTable = searchQuery.pokemon.map(pokemon => {
        const splitArray = pokemon.type.types.split("/");
        if (splitArray.length === 1){
            return `
            <tr>
            <td><a href="/pokemon?${pokemon.pokemonInfo.pokemon_name}" class="pokemon-name">${pokemon.pokemonInfo.pokemon_name}</a></td>
            <td><img src="images/types/${splitArray[0].toLowerCase()}.png" alt="" class="type-img"></td>
            <td><img src="images/pokemon-sprites/${pokemon.pokemonInfo.pokemon_name.toLowerCase()}.png" alt="" class="sprite-img"></td>
            <td>${pokemon.pokemonInfo.pokemon_hp}</td>
            <td>${pokemon.pokemonInfo.pokemon_attack}</td>
            <td>${pokemon.pokemonInfo.pokemon_special_attack}</td>
            <td>${pokemon.pokemonInfo.pokemon_defense}</td>
            <td>${pokemon.pokemonInfo.pokemon_special_defense}</td>
            <td>${pokemon.pokemonInfo.pokemon_speed}</td>
            <td><form action="/add" method="POST"><button type="submit" name="add" value="Name">Add</button></form></td>
            </tr>`
        }
        else{
            return `
            <tr>
            <td><a href="/pokemon?${pokemon.pokemonInfo.pokemon_name}" class="pokemon-name">${pokemon.pokemonInfo.pokemon_name}</a></td>
            <td><img src="images/types/${splitArray[0].toLowerCase()}.png" alt="" class="type-img"><img src="images/types/${splitArray[1].toLowerCase()}.png" alt="" class="type-img"></td>
            <td><img src="images/pokemon-sprites/${pokemon.pokemonInfo.pokemon_name.toLowerCase()}.png" alt="" class="sprite-img"></td>
            <td>${pokemon.pokemonInfo.pokemon_hp}</td>
            <td>${pokemon.pokemonInfo.pokemon_attack}</td>
            <td>${pokemon.pokemonInfo.pokemon_special_attack}</td>
            <td>${pokemon.pokemonInfo.pokemon_defense}</td>
            <td>${pokemon.pokemonInfo.pokemon_special_defense}</td>
            <td>${pokemon.pokemonInfo.pokemon_speed}</td>
            <td><form action="/add" method="POST"><button type="submit" name="add" value="Name">Add</button></form></td>
            </tr>
            `
        }
    }).join("");

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moves</title>
    <link rel="stylesheet" href="css/moves.css">
</head>
<body>
    <div id="search-container">
        <form action="/move" method="post">
            <input type="text" placeholder="Search" name="search" id="search-bar" value="${moveName}">
            <button type="submit" id="submit-button">Submit</button>
        </form>
    </div>
    <div id="homepage-container">
        <a href="/" id="homepage">Back to Home</a>
    </div>
    <h1>Move Information</h1>
    <table>
        <thead>
            <tr>
                <th>Move Name</th>
                <th>Type</th>
                <th>Damage</th>
                <th>Accuracy</th>
                <th>Category</th>
                <th>Effect</th>
            </tr>
        </thead>
        <tbody>
            ${moveTable}
        </tbody>
    </table>
    <h1>List of Pokemon that can learn this move</h1>
    <table>
        <thead>
            <tr>
                <th>Pokemon Name</th>
                <th>Types</th>
                <th>Image</th>
                <th>HP</th>
                <th>Attack</th>
                <th>Special Attack</th>
                <th>Defense</th>
                <th>Special Defense</th>
                <th>Speed</th>
                <th>Add</th>
            </tr>
        </thead>
        <tbody>
            ${pokemonTable}
        </tbody>
    </table>
</body>
</html>
`
}

module.exports = { searchByTypeHTML, searchByNameHTML, searchAbilityHTML, searchMoveHTML };