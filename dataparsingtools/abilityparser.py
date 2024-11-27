from bs4 import BeautifulSoup
import requests

url = "https://pokemondb.net/ability"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")


abilities = []

for row in soup.find('table', {'id' : 'abilities'}).find("tbody").find_all("tr"):
    ability_tag = row.find("a", class_="ent-name")
    effect_tag = row.find("td", class_="cell-med-text")
    if ability_tag and effect_tag:
        ability = ability_tag.get_text(strip=True).replace("'", "''")
        effect = effect_tag.get_text(strip=True).replace("'", "''")
        abilities.append((ability,effect))

# Add abilities to file
f = open ("./datatextfiles/abilities.txt", "w", encoding="utf-8")

for ability, effect in abilities:
    f.write(f"INSERT INTO abilities (ability_name, ability_effect) VALUES ('{ability}', '{effect}');\n")

f.close()