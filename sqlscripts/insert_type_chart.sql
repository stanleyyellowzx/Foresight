/* All matchups are offensive matchups, you can find defensive matchups by doing a reverse search */

BEGIN TRANSACTION;

/* Normal Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Fire', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Grass', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Rock', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Ghost', 0);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Normal', 'Fairy', 1);

/* Fire Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Fire', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Water', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Grass', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Ice', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Bug', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Rock', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Dragon', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Steel', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fire', 'Fairy', 1);

/* Water Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Fire', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Water', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Grass', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Ground', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Rock', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Dragon', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Steel', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Water', 'Fairy', 1);

/* Electric Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Fire', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Water', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Electric', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Grass', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Ground', 0);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Flying', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Rock', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Dragon', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Steel', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Electric', 'Fairy', 1);

/* Grass Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Fire', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Water', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Grass', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Poison', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Ground', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Flying', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Bug', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Rock', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Dragon', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Grass', 'Fairy', 1);

/* Ice Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Fire', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Water', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Grass', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Ice', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Ground', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Flying', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Rock', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Dragon', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ice', 'Fairy', 1);

/* Fighting Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Normal', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Fire', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Grass', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Ice', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Poison', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Flying', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Psychic', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Bug', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Rock', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Ghost', 0);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Dark', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Steel', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fighting', 'Fairy', 0.5);

/* Poison Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Fire', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Grass', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Poison', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Ground', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Rock', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Ghost', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Steel', 0);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Poison', 'Fairy', 2);

/* Ground Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Fire', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Electric', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Grass', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Poison', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Flying', 0);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Bug', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Rock', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Steel', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ground', 'Fairy', 1);

/* Flying Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Fire', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Electric', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Grass', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Fighting', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Bug', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Rock', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Flying', 'Fairy', 1);

/* Psychic Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Fire', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Grass', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Fighting', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Poison', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Psychic', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Rock', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Dark', 0);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Psychic', 'Fairy', 1);

/* Bug Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Fire', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Grass', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Fighting', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Poison', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Flying', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Psychic', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Rock', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Ghost', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Dark', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Bug', 'Fairy', 0.5);

/* Rock Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Fire', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Grass', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Ice', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Fighting', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Ground', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Flying', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Bug', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Rock', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Rock', 'Fairy', 1);

/* Ghost Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Normal', 0);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Fire', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Grass', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Psychic', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Rock', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Ghost', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Dark', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Steel', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Ghost', 'Fairy', 1);

/* Dragon Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Fire', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Grass', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Rock', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Dragon', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dragon', 'Fairy', 0);

/* Dark Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Fire', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Grass', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Fighting', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Psychic', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Rock', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Ghost', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Dark', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Steel', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Dark', 'Fairy', 0.5);

/* Steel Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Fire', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Water', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Electric', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Grass', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Ice', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Fighting', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Poison', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Rock', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Dragon', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Dark', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Steel', 'Fairy', 2);

/* Fairy Types */
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Normal', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Fire', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Water', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Electric', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Grass', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Ice', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Fighting', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Poison', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Ground', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Flying', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Psychic', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Bug', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Rock', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Ghost', 1);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Dragon', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Dark', 2);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Steel', 0.5);
INSERT INTO type_chart (type_name, type_matchup, effectiveness) VALUES ('Fairy', 'Fairy', 1);

COMMIT;