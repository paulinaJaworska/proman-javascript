DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS planets_vote;

CREATE TABLE users (
                     id serial PRIMARY KEY,
                     creation_date date NOT NULL ,
                     username varchar(250) UNIQUE NOT NULL,
                     password varchar(250) NOT NULL


);

