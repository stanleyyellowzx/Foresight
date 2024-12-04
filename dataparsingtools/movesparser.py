# When adding to an SQL database, you need to slightly modify the information as there are — and ∞ characters which show up and cause problems

from bs4 import BeautifulSoup
import requests
import string

url = "https://pokemondb.net/move/all"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

moves = []

for row in soup.find('table', {'id' : 'moves'}).find("tbody").find_all("tr"):
    moves_tag = row.find("a", class_="ent-name")
    type_tag = row.find("td", class_="cell-icon")
    category_tag = row.find("img", class_="img-fixed")
    temp = row.find_all("td", class_="cell-num")
    power_tag = temp[0]
    accuracy_tag = temp[1]
    effect_tag = row.find("td", class_="cell-long-text")
    if moves_tag and type_tag and category_tag and power_tag and accuracy_tag and effect_tag:
        move_name = string.capwords(moves_tag.get_text(strip=True).replace("'", "''").replace("-", " "))
        type_name = type_tag.get_text(strip=True).replace("'", "''")
        move_category = category_tag['title'].replace("'", "''")
        move_damage = power_tag.get_text(strip=True).replace("'", "''").replace("—", "0")
        move_accuracy = accuracy_tag.get_text(strip=True).replace("'", "''").replace("\u221E", "101").replace("—", "0")
        move_effect = effect_tag.get_text(strip=True).replace("'", "''")
        moves.append((move_name, type_name, move_category, move_damage, move_accuracy, move_effect))
    
f = open("./datatextfiles/moves.txt", "w", encoding="utf-8")

for name, type, category, damage, accuracy, effect in moves:
    f.write(f"INSERT INTO moves (move_name, move_damage, type_name, move_accuracy, move_category, move_effect) VALUES ('{name}', {damage}, '{type}', {accuracy}, '{category}', '{effect}');\n")

f.close()
