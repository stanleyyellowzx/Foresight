/* this script creates the database from scratch with all of the required info for the application */

BEGIN TRANSACTION;
-- Delete tables if they already exist (idempotence)
DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS moves;
DROP TABLE IF EXISTS abilities;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS nature;
DROP TABLE IF EXISTS user_info;
DROP TABLE IF EXISTS pokemon_types;
DROP TABLE IF EXISTS pokemon_abilities;
DROP TABLE IF EXISTS moves_list;
DROP TABLE IF EXISTS battle_pokemon;
DROP TABLE IF EXISTS battle_pokemon_moves;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS apart_of_team;
DROP TABLE IF EXISTS type_chart;


-- Create Tables
CREATE TABLE pokemon(
    dex_num integer not null,
    pokemon_name text not null,
    pokemon_hp integer,
    pokemon_attack integer,
    pokemon_special_attack integer,
    pokemon_defense integer,
    pokemon_special_defense integer,
    pokemon_speed integer,
    primary key(dex_num, pokemon_name)
);

CREATE TABLE types(
    type_name text primary key not null
);

CREATE TABLE moves(
    move_name text primary key not null,
    move_damage integer,
    type_name text,
    move_accuracy integer,
    move_category text,
    move_effect text,
    FOREIGN KEY (type_name) REFERENCES types(type_name)
);

CREATE TABLE abilities(
    ability_name text primary key not null,
    ability_effect text
);

CREATE TABLE items(
    item_name text primary key not null,
    item_effect text
);

CREATE TABLE nature(
    nature_name text primary key not null,
    nature_increase text,
    nature_decrease text
);

CREATE TABLE user_info(
    user_id integer primary key
);

CREATE TABLE pokemon_types(
    dex_num integer not null,
    pokemon_name text not null,
    type_name text not null,
    primary key(dex_num, pokemon_name, type_name),
    FOREIGN KEY (dex_num) REFERENCES pokemon(dex_num),
    FOREIGN KEY (pokemon_name) REFERENCES pokemon(pokemon_name),
    FOREIGN KEY (type_name) REFERENCES types(type_name)
);

CREATE TABLE pokemon_abilities(
    dex_num integer not null,
    pokemon_name text not null,
    ability_name text not null,
    primary key(dex_num, pokemon_name, ability_name),
    FOREIGN KEY (dex_num) REFERENCES pokemon(dex_num),
    FOREIGN KEY (pokemon_name) REFERENCES pokemon(pokemon_name),
    FOREIGN KEY (ability_name) REFERENCES abilities(ability_name)
);

CREATE TABLE moves_list(
    dex_num integer not null,
    pokemon_name text not null,
    move_name text not null,
    primary key(dex_num, pokemon_name, move_name),
    FOREIGN KEY (dex_num) REFERENCES pokemon(dex_num),
    FOREIGN KEY (pokemon_name) REFERENCES pokemon(pokemon_name),
    FOREIGN KEY (move_name) REFERENCES moves(move_name)
);

CREATE TABLE battle_pokemon(
    dex_num integer not null,
    pokemon_name text not null,
    bp_id integer not null,
    iv_hp integer,
    iv_attack integer,
    iv_special_attack integer,
    iv_defense integer,
    iv_special_defense integer,
    iv_speed integer,
    ev_hp integer,
    ev_attack integer,
    ev_special_attack integer,
    ev_defense integer,
    ev_special_defense integer,
    ev_speed integer,
    bp_hp integer,
    bp_attack integer,
    bp_special_attack integer,
    bp_defense integer,
    bp_special_defense integer,
    bp_speed integer,
    nature_name text,
    items_name text,
    gender text,
    primary key (dex_num, pokemon_name, bp_id),
    FOREIGN KEY (dex_num) REFERENCES pokemon(dex_num),
    FOREIGN KEY (pokemon_name) REFERENCES pokemon(pokemon_name),
    FOREIGN KEY (nature_name) REFERENCES nature(nature_name),
    FOREIGN KEY (items_name) REFERENCES items(item_name)
);

CREATE TABLE battle_pokemon_moves(
    dex_num integer not null,
    pokemon_name text not null,
    bp_id integer not null,
    move_name text not null,
    primary key (dex_num, bp_id, move_name),
    FOREIGN KEY (dex_num) REFERENCES pokemon(dex_num),
    FOREIGN KEY (pokemon_name) REFERENCES pokemon(pokemon_name),
    FOREIGN KEY (bp_id) REFERENCES battle_pokemon(bp_id),
    FOREIGN KEY (move_name) REFERENCES moves(move_name)
);

CREATE TABLE teams(
    team_id integer primary key not null,
    user_id integer,
    FOREIGN KEY (user_id) REFERENCES user_info(user_id)
);

CREATE TABLE apart_of_team(
    dex_num integer not null,
    pokemon_name text not null,
    bp_id integer not null,
    team_id integer not null,
    primary key(dex_num, pokemon_name, bp_id, team_id),
    FOREIGN KEY(dex_num) REFERENCES pokemon(dex_num),
    FOREIGN KEY(pokemon_name) REFERENCES pokemon(pokemon_name),
    FOREIGN KEY(bp_id) REFERENCES battle_pokemon(bp_id)
);

CREATE TABLE type_chart(
    type_name text not null,
    type_matchup text not null,
    effectiveness DECIMAL(2, 1),
    primary key(type_name, type_matchup),
    FOREIGN KEY (type_name) REFERENCES types(type_name),
    FOREIGN KEY (type_matchup) REFERENCES types(type_name)
);

COMMIT;