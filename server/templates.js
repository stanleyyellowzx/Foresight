function searchByTypeHTML(searchQuery){
    console.log("Length of types is: " + searchQuery.types.length);
    console.log("Length of stats is: " + searchQuery.stat.length);
    let typesTable = searchQuery.types.map(pokemon => {
        return `
        <tr>
            <td>${pokemon.pokemon_name}</td>
            <td>${pokemon.types}</td>
        `;
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
        <title>Pokémon Table</title>
        <link rel="stylesheet" href="/css/pokemonlist.css">
    </head>
    <body>
        <h1>Pokémon List</h1>
        <form action="/" method="GET"><button type="submit" id="search">Back to Search</button></form>
        <table>
            <thead>
                <tr>
                    <th>Pokemon Name</th>
                    <th>Types</th>
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

module.exports = { searchByTypeHTML };