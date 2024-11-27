from bs4 import BeautifulSoup
import requests

# Fetch the page content
url = "https://www.serebii.net/itemdex/list/holditem.shtml"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

# Extract item names and effects
items = []
for row in soup.find_all("tr", height="32"): 
    temp = row.find_all("td", class_="fooinfo")
    name_tag = temp[0].find("a")
    effect_tag = temp[1]  
    if name_tag and effect_tag:
        name = name_tag.get_text(strip=True).replace("'", "''")
        effect = effect_tag.get_text(strip=True).replace("'", "''")
        items.append((name, effect))

# Add items to file
f = open("./datatextfiles/items.txt", "w", encoding="utf-8")

for name, effect in items:
    f.write(f"INSERT INTO items (item_name, item_effect) VALUES ('{name}', '{effect}');\n")

f.close()