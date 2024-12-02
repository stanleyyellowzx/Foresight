function generateHTML(searchQuery){
    let tableRows = searchQuery.map(pokemon => {
        return `
        <tr>
            <td>${pokemon.pokemon_name}</td>
            <td>${pokemon.type_name}</td>
            <td>Speed: ${pokemon.pokemon_speed}</td>
            <td><form action="/add" method="POST"><button type="submit" name="add" value="Name">Add</button></form></td>
        </tr>
        `;
    }).join('');

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
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Stats</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}  <!-- Insert dynamically generated table rows here -->
            </tbody>
        </table>
    </body>
    </html>
    `;
}

module.exports = { generateHTML };