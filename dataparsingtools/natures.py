from bs4 import BeautifulSoup
import requests
import re

url = "https://www.serebii.net/games/natures.shtml"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

natures = []

for row in soup.find('table', {'class' : 'dextable'}).find_all("tr")[1:]:
    temp = row.find_all("td", class_= "fooinfo")
    if temp:
        nature = re.sub(r'[ぁ-んァ-ン一-龯]', '', temp[0].get_text(strip=True)).replace("'", "''")
        increase = temp[1].get_text(strip=True).lower().replace(" ", "_").replace("'", "''")
        decrease = temp[2].get_text(strip=True).lower().replace(" ", "_").replace("'", "''")
        natures.append((nature, increase, decrease))


f = open("./datatextfiles/natures.txt", "w", encoding="utf-8")
for nature, increase, decrease in natures:
    f.write(f"INSERT INTO nature (nature_name, nature_increase, nature_decrease) VALUES ('{nature}', '{increase}', '{decrease}');\n")
f.close()
