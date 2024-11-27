def normalize_file(filepath):
    with open(filepath, 'r') as f:
        return ''.join(line.strip() + '\n' for line in f)

file1_content = normalize_file('./datatextfiles/pokemonmoves.txt')
file2_content = normalize_file("./sqlscripts/insert_pokemon_moves.sql")

if file1_content == file2_content:
    print("The files have the same content.")
else:
    print("The files have different content.")
