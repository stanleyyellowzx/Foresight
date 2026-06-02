IMPORTANT: This project works, but many features are still unimplemented.

Scraping data from sites:

Moves: https://pokemondb.net/move/all Abilities: https://pokemondb.net/ability Items: https://www.serebii.net/itemdex/list/holditem.shtml Natures: https://www.serebii.net/games/natures.shtml

libraries used (python):
BeautifulSoup4

to install dependencies, inside of dataparsingtools directory:
pip install bs4

libraries used (javascript):

better-sqlite3, express, nodemon, axios

to install dependencies, run the following command inside of api, dataparsingtools, and api directory:
npm install

you will need a .env file inside of server and api directories with the correct variables to properly run the program
see the attached example .env files to setup your .env file

to run, first cd into api directory and use npm run dev

then, cd into client directory and use npm run dev
