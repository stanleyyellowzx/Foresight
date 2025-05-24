IMPORTANT: This project works, but many features are still unimplemented.

Scraping data from sites:

Moves: https://pokemondb.net/move/all Abilities: https://pokemondb.net/ability Items: https://www.serebii.net/itemdex/list/holditem.shtml Natures: https://www.serebii.net/games/natures.shtml

libraries used (python):
BeautifulSoup4

to install dependencies, inside of dataparsingtools directory:
pip install bs4

libraries used (javascript):

better-sqlite3, express, nodemon, axios

to install dependencies, inside of server directory:
npm install express
npm install --save-dev nodemon
npm install better-sqlite3 (you may need to install other things like nodegyp)

inside of dataparsingtools:
npm install axios

to run, first cd into api directory and use npm run dev

then, cd into server directory and use npm run dev
